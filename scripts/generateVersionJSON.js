const path = require('path');
const childProcess = require('child_process');
const fs = require('fs');

const packageJSON = require(path.join(__dirname, '..', 'package.json'));


const outFilename = path.join(__dirname, '..', 'build', 'version.json');

const versionJSON = {
    source: 'https://github.com/mozilla/ensemble',
    version: packageJSON.version,
    commit: childProcess.execSync('git rev-parse HEAD').toString().trim(),
};

fs.writeFile(outFilename, JSON.stringify(versionJSON, null, 4), error => {
    if (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    } else {
        // eslint-disable-next-line no-console
        console.log('Wrote ' + outFilename);
    }
});
