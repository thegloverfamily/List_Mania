// State management
let selectedCharacters = new Set();
let filteredData = [];

// DOM elements
const searchInput = document.getElementById('searchInput');
const dayFilter = document.getElementById('dayFilter');
const funkoPopsFilter = document.getElementById('funkoPopsFilter');
const mediaTypeFilter = document.getElementById('mediaTypeFilter');
const guestsContainer = document.getElementById('guestsContainer');
const statsDisplay = document.getElementById('statsDisplay');
const selectedSummary = document.getElementById('selectedSummary');
const selectedList = document.getElementById('selectedList');
const selectedCount = document.getElementById('selectedCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGuests();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', debounce(renderGuests, 300));
    dayFilter.addEventListener('change', renderGuests);
    funkoPopsFilter.addEventListener('change', renderGuests);
    mediaTypeFilter.addEventListener('change', renderGuests);
    
    document.getElementById('selectAllBtn').addEventListener('click', selectAll);
    document.getElementById('deselectAllBtn').addEventListener('click', deselectAll);
    document.getElementById('exportSelectedBtn').addEventListener('click', exportSelected);
}

// Filter and search logic
function filterGuests() {
    const searchTerm = searchInput.value.toLowerCase();
    const dayValue = dayFilter.value;
    const funkoValue = funkoPopsFilter.value;
    const mediaValue = mediaTypeFilter.value;
    
    return guestsData.filter(guest => {
        // Day filter
        if (dayValue !== 'all' && !guest.days.includes(dayValue)) {
            return false;
        }
        
        // Search filter
        if (searchTerm) {
            const matchesGuestName = guest.name.toLowerCase().includes(searchTerm);
            const matchesCredit = guest.credits.some(credit => 
                credit.title.toLowerCase().includes(searchTerm) ||
                credit.franchise.toLowerCase().includes(searchTerm) ||
                (credit.funkoPops && credit.funkoPops.some(pop => 
                    pop.name.toLowerCase().includes(searchTerm)
                ))
            );
            
            if (!matchesGuestName && !matchesCredit) {
                return false;
            }
        }
        
        // Funko Pop filter
        if (funkoValue !== 'all') {
            const hasFunko = guest.credits.some(credit => credit.hasFunkoPop);
            if (funkoValue === 'yes' && !hasFunko) return false;
            if (funkoValue === 'no' && hasFunko) return false;
        }
        
        // Media type filter
        if (mediaValue !== 'all') {
            const hasMediaType = guest.credits.some(credit => credit.type === mediaValue);
            if (!hasMediaType) return false;
        }
        
        return true;
    });
}

// Render guests
function renderGuests() {
    filteredData = filterGuests();
    guestsContainer.innerHTML = '';
    
    if (filteredData.length === 0) {
        guestsContainer.innerHTML = '<div class="no-results">No guests found matching your criteria</div>';
        updateStats();
        return;
    }
    
    filteredData.forEach(guest => {
        const guestCard = createGuestCard(guest);
        guestsContainer.appendChild(guestCard);
    });
    
    updateStats();
}

// Create guest card
function createGuestCard(guest) {
    const card = document.createElement('div');
    card.className = 'guest-card';
    
    const daysText = guest.days.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ');
    const funkoCount = guest.credits.reduce((acc, credit) => 
        acc + (credit.funkoPops ? credit.funkoPops.length : 0), 0
    );
    
    card.innerHTML = `
        <div class="guest-header">
            <h2 class="guest-name">${guest.name}</h2>
            <div class="guest-meta">
                <span class="days-badge">${daysText}</span>
                ${funkoCount > 0 ? `<span class="funko-badge">${funkoCount} Funko Pop${funkoCount !== 1 ? 's' : ''}</span>` : ''}
            </div>
        </div>
        <div class="credits-container">
            ${guest.credits.map(credit => createCreditHTML(credit, guest.id)).join('')}
        </div>
    `;
    
    return card;
}

// Create credit HTML
function createCreditHTML(credit, guestId) {
    const mediaIcon = getMediaTypeIcon(credit.type);
    const creditId = `${guestId}-${credit.title.replace(/[^a-zA-Z0-9]/g, '-')}`;
    
    let html = `
        <div class="credit-item ${credit.hasFunkoPop ? 'has-funko' : ''}">
            <div class="credit-header">
                <div class="credit-title-row">
                    <span class="media-icon">${mediaIcon}</span>
                    <h3 class="credit-title">${credit.title}</h3>
                    <span class="credit-type">${credit.type.replace('-', ' ')}</span>
                </div>
                <div class="credit-info">
                    <span class="franchise">${credit.franchise}</span>
                    <span class="years">${credit.years}</span>
                </div>
            </div>
    `;
    
    if (credit.hasFunkoPop && credit.funkoPops) {
        html += `
            <div class="funko-pops-section">
                <h4 class="funko-header">Funko Pops Available:</h4>
                <div class="funko-list">
                    ${credit.funkoPops.map(pop => {
                        const popId = `${creditId}-${pop.number}`;
                        const isSelected = selectedCharacters.has(popId);
                        
                        return `
                            <div class="funko-item ${isSelected ? 'selected' : ''}" data-pop-id="${popId}">
                                <label class="funko-checkbox">
                                    <input type="checkbox" 
                                           ${isSelected ? 'checked' : ''}
                                           onchange="toggleCharacter('${popId}', '${credit.title}', '${credit.franchise}', '${pop.number}', '${pop.name}')"
                                    >
                                    <div class="funko-details">
                                        <span class="funko-number">#${pop.number}</span>
                                        <span class="funko-name">${pop.name}</span>
                                        ${pop.variants.length > 0 ? 
                                            `<span class="funko-variants">${pop.variants.join(', ')}</span>` : ''
                                        }
                                    </div>
                                </label>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (credit.note) {
        html += `<div class="credit-note">${credit.note}</div>`;
    }
    
    html += `</div>`;
    
    return html;
}

// Get media type icon
function getMediaTypeIcon(type) {
    const icons = {
        'live-action': '🎬',
        'animation': '🎨',
        'video-games': '🎮'
    };
    return icons[type] || '📺';
}

// Toggle character selection
function toggleCharacter(popId, character, franchise, number, name) {
    if (selectedCharacters.has(popId)) {
        selectedCharacters.delete(popId);
    } else {
        selectedCharacters.add(popId);
    }
    
    updateSelectedUI();
}

// Update selected UI
function updateSelectedUI() {
    selectedCount.textContent = selectedCharacters.size;
    
    if (selectedCharacters.size === 0) {
        selectedSummary.classList.add('hidden');
        return;
    }
    
    selectedSummary.classList.remove('hidden');
    
    // Build selected list
    const selectedItems = Array.from(selectedCharacters).map(popId => {
        const [guestId, ...rest] = popId.split('-');
        const guest = guestsData.find(g => g.id === parseInt(guestId));
        
        if (!guest) return null;
        
        for (const credit of guest.credits) {
            if (credit.funkoPops) {
                for (const pop of credit.funkoPops) {
                    if (popId.includes(pop.number)) {
                        return {
                            id: popId,
                            guest: guest.name,
                            character: credit.title,
                            franchise: credit.franchise,
                            pop: `#${pop.number} ${pop.name}`
                        };
                    }
                }
            }
        }
        return null;
    }).filter(item => item !== null);
    
    selectedList.innerHTML = selectedItems.map(item => `
        <div class="selected-item">
            <span class="selected-pop">${item.pop}</span>
            <span class="selected-character">${item.character} (${item.franchise})</span>
            <span class="selected-guest">Guest: ${item.guest}</span>
            <button class="remove-btn" onclick="removeSelection('${item.id}')">✕</button>
        </div>
    `).join('');
}

// Remove selection
function removeSelection(popId) {
    selectedCharacters.delete(popId);
    renderGuests();
    updateSelectedUI();
}

// Select all
function selectAll() {
    filteredData.forEach(guest => {
        guest.credits.forEach(credit => {
            if (credit.funkoPops) {
                credit.funkoPops.forEach(pop => {
                    const creditId = `${guest.id}-${credit.title.replace(/[^a-zA-Z0-9]/g, '-')}`;
                    const popId = `${creditId}-${pop.number}`;
                    selectedCharacters.add(popId);
                });
            }
        });
    });
    
    renderGuests();
    updateSelectedUI();
}

// Deselect all
function deselectAll() {
    selectedCharacters.clear();
    renderGuests();
    updateSelectedUI();
}

// Export selected
function exportSelected() {
    if (selectedCharacters.size === 0) {
        alert('No characters selected to export');
        return;
    }
    
    const exportData = [];
    
    selectedCharacters.forEach(popId => {
        const [guestId] = popId.split('-');
        const guest = guestsData.find(g => g.id === parseInt(guestId));
        
        if (guest) {
            guest.credits.forEach(credit => {
                if (credit.funkoPops) {
                    credit.funkoPops.forEach(pop => {
                        if (popId.includes(pop.number)) {
                            exportData.push({
                                guest: guest.name,
                                character: credit.title,
                                franchise: credit.franchise,
                                funkoPop: `#${pop.number} ${pop.name}`,
                                variants: pop.variants.join(', ') || 'Standard'
                            });
                        }
                    });
                }
            });
        }
    });
    
    // Create CSV
    const csv = [
        ['Guest', 'Character', 'Franchise', 'Funko Pop', 'Variants'],
        ...exportData.map(row => [
            row.guest,
            row.character,
            row.franchise,
            row.funkoPop,
            row.variants
        ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mcm-birmingham-funko-pops-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Update stats
function updateStats() {
    const totalFunkos = filteredData.reduce((acc, guest) => 
        acc + guest.credits.reduce((creditAcc, credit) => 
            creditAcc + (credit.funkoPops ? credit.funkoPops.length : 0), 0
        ), 0
    );
    
    statsDisplay.textContent = `Showing ${filteredData.length} guest${filteredData.length !== 1 ? 's' : ''} with ${totalFunkos} Funko Pop character${totalFunkos !== 1 ? 's' : ''}`;
}

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
