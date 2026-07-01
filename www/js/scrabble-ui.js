// Scrabble UI - Handles user interaction and display

document.addEventListener('DOMContentLoaded', function() {
    const tilesInput = document.getElementById('tiles');
    const boardLettersInput = document.getElementById('boardLetters');
    const minLengthSelect = document.getElementById('minLength');
    const sortBySelect = document.getElementById('sortBy');
    const useAllTilesCheckbox = document.getElementById('useAllTiles');
    const findWordsButton = document.getElementById('findWords');
    const resultsSection = document.getElementById('resultsSection');
    const wordList = document.getElementById('wordList');
    const statsDiv = document.getElementById('stats');

    const solver = new ScrabbleSolver();

    // Auto-uppercase and validate input
    tilesInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase().replace(/[^A-Z?]/g, '');
        if (e.target.value.length > 7) {
            e.target.value = e.target.value.slice(0, 7);
        }
    });

    boardLettersInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
    });

    // Handle Enter key in input fields
    [tilesInput, boardLettersInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                findWords();
            }
        });
    });

    // Main word finding function
    findWordsButton.addEventListener('click', findWords);

    function findWords() {
        const tiles = tilesInput.value.trim();
        const boardLetters = boardLettersInput.value.trim();
        const minLength = parseInt(minLengthSelect.value);
        const sortBy = sortBySelect.value;
        const useAllTiles = useAllTilesCheckbox.checked;

        // Validate input
        if (!tiles) {
            showError('Please enter your tiles');
            return;
        }

        const validation = validateTiles(tiles);
        if (!validation.valid) {
            showError(validation.error);
            return;
        }

        // Show loading state
        showLoading();

        // Small delay to show loading animation
        setTimeout(() => {
            try {
                // Configure solver
                solver.setTiles(tiles);
                
                if (boardLetters) {
                    solver.setBoardLetters(boardLetters);
                }

                // Find words
                const results = solver.findWords({
                    minLength: minLength,
                    maxLength: 7,
                    useAllTiles: useAllTiles,
                    sortBy: sortBy
                });

                // Display results
                displayResults(results);
            } catch (error) {
                showError('An error occurred while finding words. Please try again.');
                console.error(error);
            }
        }, 100);
    }

    function showLoading() {
        wordList.innerHTML = '<div class="loading">Finding words</div>';
        resultsSection.style.display = 'block';
    }

    function showError(message) {
        wordList.innerHTML = `<div class="error-message">${message}</div>`;
        resultsSection.style.display = 'block';
        statsDiv.innerHTML = '';
    }

    function displayResults(results) {
        // Clear previous results
        wordList.innerHTML = '';
        
        if (results.length === 0) {
            wordList.innerHTML = '<div class="error-message">No words found. Try different tiles or reduce the minimum length.</div>';
            statsDiv.innerHTML = '';
            return;
        }

        // Display statistics
        const stats = solver.getStats();
        displayStats(stats);

        // Display words
        results.forEach((result, index) => {
            const wordItem = createWordElement(result, index < 3);
            wordList.appendChild(wordItem);
        });

        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function createWordElement(result, isTop) {
        const div = document.createElement('div');
        div.className = 'word-item' + (isTop ? ' top-word' : '');
        
        let scoreDisplay = `${result.score} pts`;
        if (result.hasBingo) {
            scoreDisplay += ' 🎯';
        }
        
        let blankInfo = '';
        if (result.usedBlanks.length > 0) {
            blankInfo = ' (blank used)';
        }
        
        div.innerHTML = `
            <div class="word-text">${result.word}</div>
            <div class="word-score">${scoreDisplay}</div>
            <div class="word-length">${result.length} letters${blankInfo}</div>
        `;
        
        // Add click to copy functionality
        div.addEventListener('click', function() {
            copyToClipboard(result.word);
            showCopiedFeedback(div);
        });
        
        div.title = 'Click to copy';
        
        return div;
    }

    function displayStats(stats) {
        let statsHTML = `
            Found <strong>${stats.totalWords}</strong> word${stats.totalWords !== 1 ? 's' : ''}
        `;
        
        if (stats.totalWords > 0) {
            statsHTML += ` • Best: <strong>${stats.highestScore}</strong> pts`;
            
            if (stats.bingoCount > 0) {
                statsHTML += ` • <strong>${stats.bingoCount}</strong> bingo${stats.bingoCount !== 1 ? 's' : ''} 🎯`;
            }
        }
        
        statsDiv.innerHTML = statsHTML;
    }

    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
    }

    function showCopiedFeedback(element) {
        const originalBg = element.style.background;
        element.style.background = '#10b981';
        element.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            element.style.background = originalBg;
            element.style.transform = '';
        }, 300);
    }

    // Focus on tiles input on load
    tilesInput.focus();

    // Show dictionary info
    console.log(`Scrabble Word Finder loaded with ${getDictionarySize()} words in dictionary`);
});
