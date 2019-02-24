#! /usr/bin/env node
var shell = require('shelljs');
// shell.exec("echo shell.exec works");
// console.log('console log output');

shell.exec("git add -A . && git commit -a -m 'gh-pages update'");