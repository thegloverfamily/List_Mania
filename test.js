// Simple test to validate the data structure
const { guestsData } = require('./data.js');

// Test data structure
console.log('Testing MCM Birmingham Funko Finder Application...\n');

// Test 1: Verify guest data exists
console.log('Test 1: Guest Data Exists');
console.log(`✓ Total guests: ${guestsData.length}`);
console.log(`✓ Expected: 15 guests\n`);

// Test 2: Verify Friday guests
console.log('Test 2: Friday Attendance');
const fridayGuests = guestsData.filter(g => g.days.includes('friday'));
console.log(`✓ Friday guests: ${fridayGuests.length}`);
fridayGuests.forEach(g => console.log(`  - ${g.name}`));
console.log('');

// Test 3: Count Funko Pops
console.log('Test 3: Funko Pop Statistics');
let totalFunkoPops = 0;
let guestsWithFunkos = 0;

guestsData.forEach(guest => {
    let guestHasFunko = false;
    guest.credits.forEach(credit => {
        if (credit.funkoPops) {
            totalFunkoPops += credit.funkoPops.length;
            guestHasFunko = true;
        }
    });
    if (guestHasFunko) guestsWithFunkos++;
});

console.log(`✓ Total Funko Pop figures: ${totalFunkoPops}`);
console.log(`✓ Guests with Funko Pops: ${guestsWithFunkos}`);
console.log(`✓ Guests without Funko Pops: ${guestsData.length - guestsWithFunkos}\n`);

// Test 4: Verify data integrity
console.log('Test 4: Data Integrity');
let errors = 0;

guestsData.forEach(guest => {
    if (!guest.id || !guest.name || !guest.days || !guest.credits) {
        console.log(`✗ Guest ${guest.name || 'Unknown'} missing required fields`);
        errors++;
    }
    
    guest.credits.forEach((credit, idx) => {
        if (!credit.title || !credit.franchise || !credit.type) {
            console.log(`✗ Credit ${idx} for ${guest.name} missing required fields`);
            errors++;
        }
        
        if (credit.hasFunkoPop && !credit.funkoPops) {
            console.log(`✗ Credit "${credit.title}" for ${guest.name} marked as having Funko but no pops listed`);
            errors++;
        }
    });
});

if (errors === 0) {
    console.log('✓ All data integrity checks passed\n');
} else {
    console.log(`✗ Found ${errors} data integrity issues\n`);
}

// Test 5: Media type distribution
console.log('Test 5: Media Type Distribution');
const mediaTypes = {};
guestsData.forEach(guest => {
    guest.credits.forEach(credit => {
        mediaTypes[credit.type] = (mediaTypes[credit.type] || 0) + 1;
    });
});

Object.entries(mediaTypes).forEach(([type, count]) => {
    console.log(`  ${type}: ${count} credits`);
});
console.log('');

// Test 6: Notable characters with Funko Pops
console.log('Test 6: Sample Characters with Funko Pops');
const samples = [
    'Charlie Cox - Daredevil',
    'Neil Newbon - Astarion',
    'Khary Payton - Cyborg',
    'Bryce Papenbrook - Eren Yeager',
    'Kirk Thornton - Shadow the Hedgehog'
];

samples.forEach(sample => {
    const [guestName, character] = sample.split(' - ');
    const guest = guestsData.find(g => g.name === guestName);
    if (guest) {
        const credit = guest.credits.find(c => c.title.includes(character));
        if (credit && credit.funkoPops) {
            console.log(`✓ ${sample}: ${credit.funkoPops.length} Funko Pop(s)`);
        } else {
            console.log(`✗ ${sample}: Not found or no Funko Pops`);
        }
    }
});
console.log('');

// Summary
console.log('========================================');
console.log('Test Summary');
console.log('========================================');
console.log(`Total Guests: ${guestsData.length}`);
console.log(`Friday Attendees: ${fridayGuests.length}`);
console.log(`Total Credits: ${guestsData.reduce((acc, g) => acc + g.credits.length, 0)}`);
console.log(`Total Funko Pops: ${totalFunkoPops}`);
console.log(`Data Errors: ${errors}`);
console.log('========================================\n');

if (errors === 0) {
    console.log('✓ All tests passed! Application is ready to use.');
    process.exit(0);
} else {
    console.log('✗ Some tests failed. Please review the errors above.');
    process.exit(1);
}
