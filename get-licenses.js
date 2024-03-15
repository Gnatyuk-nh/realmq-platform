const fs = require('fs');

function extractUniqueLicensesFromFile(filePath) {
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonString);
    let uniqueLicenses = new Set();

    for (const packageName in data) {
        if (data.hasOwnProperty(packageName)) {
            let license = data[packageName].licenses
            uniqueLicenses.add(license);
        }
    }
    return uniqueLicenses;
}

const filePath = '../output.json';
const uniqueLicenses = extractUniqueLicensesFromFile(filePath);
console.log(uniqueLicenses);
