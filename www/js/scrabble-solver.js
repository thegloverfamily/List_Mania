// Scrabble Solver - Core word-finding and scoring logic

// Tile values in Scrabble
const TILE_VALUES = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4,
    'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3,
    'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8,
    'Y': 4, 'Z': 10, '?': 0
};

const BINGO_BONUS = 50; // 7-letter word bonus

class ScrabbleSolver {
    constructor() {
        this.tiles = [];
        this.boardLetters = [];
        this.results = [];
    }

    /**
     * Set the available tiles
     */
    setTiles(tilesString) {
        this.tiles = tilesString.toUpperCase().split('').filter(t => t.match(/[A-Z?]/));
        return this;
    }

    /**
     * Set board letters (optional letters already on board)
     */
    setBoardLetters(lettersString) {
        this.boardLetters = lettersString ? lettersString.toUpperCase().split('').filter(t => t.match(/[A-Z]/)) : [];
        return this;
    }

    /**
     * Calculate the base score for a word (tile values only)
     */
    calculateScore(word, usedBlanks = []) {
        let score = 0;
        const wordUpper = word.toUpperCase();
        
        for (let i = 0; i < wordUpper.length; i++) {
            const letter = wordUpper[i];
            // Blank tiles score 0
            if (usedBlanks.includes(i)) {
                score += 0;
            } else {
                score += TILE_VALUES[letter] || 0;
            }
        }
        
        return score;
    }

    /**
     * Check if a word can be formed from available tiles
     */
    canFormWord(word, availableTiles) {
        const tiles = [...availableTiles];
        const wordUpper = word.toUpperCase();
        const usedBlanks = [];
        
        for (let i = 0; i < wordUpper.length; i++) {
            const letter = wordUpper[i];
            const index = tiles.indexOf(letter);
            
            if (index !== -1) {
                tiles.splice(index, 1);
            } else {
                // Try to use a blank tile
                const blankIndex = tiles.indexOf('?');
                if (blankIndex !== -1) {
                    tiles.splice(blankIndex, 1);
                    usedBlanks.push(i);
                } else {
                    return null;
                }
            }
        }
        
        return { remaining: tiles, usedBlanks };
    }

    /**
     * Generate all possible permutations of letters
     */
    generatePermutations(letters, minLength = 2, maxLength = 7) {
        const results = new Set();
        
        function permute(arr, current = '') {
            if (current.length >= minLength && current.length <= maxLength) {
                results.add(current);
            }
            
            if (current.length >= maxLength) return;
            
            for (let i = 0; i < arr.length; i++) {
                const newArr = [...arr];
                const letter = newArr.splice(i, 1)[0];
                permute(newArr, current + letter);
            }
        }
        
        permute(letters);
        return Array.from(results);
    }

    /**
     * Find all valid words that can be formed
     */
    findWords(options = {}) {
        const {
            minLength = 2,
            maxLength = 7,
            useAllTiles = false,
            sortBy = 'score'
        } = options;

        this.results = [];
        const allTiles = [...this.tiles, ...this.boardLetters];
        
        if (allTiles.length === 0) {
            return [];
        }

        // Generate combinations of different lengths
        const combinations = this.generateCombinations(allTiles, minLength, maxLength);
        const checkedWords = new Set();

        for (const combo of combinations) {
            // Skip if useAllTiles is true and we're not using all our tiles
            if (useAllTiles && combo.filter(t => this.tiles.includes(t)).length !== this.tiles.length) {
                continue;
            }

            const permutations = this.generatePermutations(combo, minLength, maxLength);
            
            for (const word of permutations) {
                if (checkedWords.has(word)) continue;
                checkedWords.add(word);

                // Check if it's a valid Scrabble word
                if (isValidWord(word)) {
                    // Check if we can form it with our tiles
                    const canForm = this.canFormWord(word, allTiles);
                    
                    if (canForm) {
                        const score = this.calculateScore(word, canForm.usedBlanks);
                        const finalScore = word.length === 7 ? score + BINGO_BONUS : score;
                        
                        this.results.push({
                            word: word.toUpperCase(),
                            score: finalScore,
                            baseScore: score,
                            length: word.length,
                            hasBingo: word.length === 7,
                            usedBlanks: canForm.usedBlanks
                        });
                    }
                }
            }
        }

        // Sort results
        this.sortResults(sortBy);
        
        // Remove duplicates
        const uniqueResults = [];
        const seenWords = new Set();
        
        for (const result of this.results) {
            if (!seenWords.has(result.word)) {
                seenWords.add(result.word);
                uniqueResults.push(result);
            }
        }
        
        this.results = uniqueResults;
        return this.results;
    }

    /**
     * Generate all combinations of tiles
     */
    generateCombinations(tiles, minLength, maxLength) {
        const results = [];
        
        function combine(start, combo) {
            if (combo.length >= minLength) {
                results.push([...combo]);
            }
            
            if (combo.length >= maxLength) return;
            
            for (let i = start; i < tiles.length; i++) {
                combo.push(tiles[i]);
                combine(i + 1, combo);
                combo.pop();
            }
        }
        
        combine(0, []);
        return results;
    }

    /**
     * Sort results by specified criteria
     */
    sortResults(sortBy) {
        switch (sortBy) {
            case 'score':
                this.results.sort((a, b) => b.score - a.score || b.length - a.length);
                break;
            case 'length':
                this.results.sort((a, b) => b.length - a.length || b.score - a.score);
                break;
            case 'alpha':
                this.results.sort((a, b) => a.word.localeCompare(b.word));
                break;
        }
    }

    /**
     * Get results
     */
    getResults() {
        return this.results;
    }

    /**
     * Get top N results
     */
    getTopResults(n = 10) {
        return this.results.slice(0, n);
    }

    /**
     * Get statistics
     */
    getStats() {
        if (this.results.length === 0) {
            return {
                totalWords: 0,
                averageScore: 0,
                highestScore: 0,
                lowestScore: 0
            };
        }

        const scores = this.results.map(r => r.score);
        const totalScore = scores.reduce((a, b) => a + b, 0);

        return {
            totalWords: this.results.length,
            averageScore: Math.round(totalScore / this.results.length),
            highestScore: Math.max(...scores),
            lowestScore: Math.min(...scores),
            bingoCount: this.results.filter(r => r.hasBingo).length
        };
    }
}

// Helper function to validate tiles input
function validateTiles(tiles) {
    const cleaned = tiles.toUpperCase().replace(/[^A-Z?]/g, '');
    if (cleaned.length === 0) {
        return { valid: false, error: 'Please enter at least one tile' };
    }
    if (cleaned.length > 7) {
        return { valid: false, error: 'Maximum 7 tiles allowed' };
    }
    return { valid: true, tiles: cleaned };
}
