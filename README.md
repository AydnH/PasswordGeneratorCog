# PasswordGeneratorCLI

Javascript random password generator contolled from CLI. s input parameters the user must provide the minimum length, the number of special characters, the number of numbers and the number of passwords that shall be created.

Create an API in Javascript that generates secure passwords.
As input parameters the user must provide the minimum length, the number of special characters,
the number of numbers and the number of passwords that shall be created.
Then generate the passwords and return them in an array. Please also consider to add unit tests.

user - user set parameters length minimum (set upper limit to 28) = number - user set special characters = number - user set number of numbers = number - user set number of passwords = number - return passwords into array

TO USE

- clone repository
- npm install inside main directory

options :

- -l --length <number>', 'MINIMUM length of password'
- -ns --symbols <number>', 'number of symbols'
- -n --numbers <number>', 'number of numbers'
- -np --total <number>', 'number of passwords'

example uses:
node index --length=12 --syms=3 --non=6 --total=1
node index --length=16 --syms=0 --non=0 --total=14
