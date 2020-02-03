const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

const createDir = (program, dir) => {
    const dirPath = path.join(program.directory, dir);
    if (!fs.existsSync(dirPath)) {
        mkdirp.sync(dirPath);
    }
};
exports.createDir = createDir;
