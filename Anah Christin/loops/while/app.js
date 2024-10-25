// console.log('Done')

// while (condition)
//     {statement}

// for(let i=0;i<10;i++){

// }

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++;
// }

function sumNumber(n) {
    let sum = 0
    while (n > 0) {
        ld = n % 10
        console.log(ld);

        sum += ld
        console.log(sum);

        n = Math.floor(n / 10)
        console.log(n);

    }
    console.log('Sum is ', sum);

}

function pwd(p) {
    let savedPwd = "pass123"
    while (savedPwd !== p) {
        console.log('Try again');
        p = prompt('Enter correct password: ')
        // pwd(p)
    }
    console.log('Success')
}

// 10 - factorial 
// 10*9*8*7*6*5*4*3*2*1 =

function factorial(n) {
    let num = n
    let f = 1
    while (n > 0) {
        f *= n
        n--;
    }
    console.log(`factorial of ${num} is ${f}`);

}