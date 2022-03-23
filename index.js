const program = require('commander');
const createPasswords = require('./utils/createPasswords');
const log = console.log;
const passwords = [];

// using commander to generate from command line
program.version('1.0.0').description('Secure Random Password Generator');
program
.option('-l --length <number>', 'minimum length of password')
.option('-ns --syms <number>', 'number of symbols')
.option('-non --non <number>', 'number of numbers')
.option('-np --total <number>', 'number of passwords')
.parse();

const {length, syms, non, total} = program.opts();

// get passwords
for (let i = 0; i < total; i++){
    let gen = createPasswords(length, syms, non, total)
    passwords.push(gen);
}

//output
log(passwords);
