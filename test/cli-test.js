'use strict';

const assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    execSync = require('child_process').execSync,
    del = require('del'),
    root = path.resolve(__dirname, '..');

execSync('node bin/onespace src/convertor.js _cli_test_results/', {
    cwd: root
});

execSync('node bin/onespace _cli_test_results/convertor.js _cli_test_results/reverted/', {
    cwd: root
});

const original = fs.readFileSync(root + '/src/convertor.js', 'utf8'),
    converted = fs.readFileSync(root + '/_cli_test_results/reverted/convertor.js', 'utf8');

assert(original === converted, 'expected double-converted to be same as original');

del.sync(root + '/_cli_test_results/**');

console.log('test passed');
