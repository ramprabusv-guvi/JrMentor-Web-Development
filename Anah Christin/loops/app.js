// for (s1;s2;s3){
//     //code
// }
// s1 intitating variable
// s2 condition check
// s3 setting intial variable's value

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// function nums(a, b) {
//     for (let i = a; i <= b; i++) {
//         console.log(i)
//     }
// }

// 1 x 3 = 3
// 2 x 3 = 6
// .

// function mulTable(m) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i} X ${m} = ${i * m}`)
//     }
// }

// const animals = ['Jackal', 'Hyena', 'Cheetah']
// let l = animals.length
// console.log(l)
// for (let i = 0; i < l; i++) {
//     console.log(i);
//     console.log(animals[i]);
// }

// function paraPrint(words) {
//     let para = ''
//     for (let i = 0; i < words.length; i++) {
//         para += words[i] + ' '
//     }
//     console.log(para);

// }

// const self = { name: 'Anah', subject: 'JS' }
// for (let x in self) {
//     console.log(x);
//     console.log(self[x]);
// }

// const animals = ['Jackal', 'Hyena', 'Cheetah']
// for (let index in animals) {
//     console.log(index);
//     console.log(animals[index]);
// }

// const flowers = ['Hibiscus', 'Lilly', 'Jasmine']
// for (let each of flowers) {
//     console.log(each)
// }

// function acro(abbr) {
//     let words = abbr.split(' ')
//     // console.log(words)
//     let result = ''
//     for (let each of words) {
//         // console.log(each);
//         // console.log(each[0])
//         result += each[0].toUpperCase()
//     }
//     console.log('Acronym of', abbr, 'is', result)
// }

// for (let each of 'Javascript') {
//     console.log(each);
// }

function sumDigits(num) {
    num = String(num) //num to string
    let sum = 0
    for (let each of num) {
        sum += parseInt(each)
        // console.log(typeof parseInt(each));
    }
    console.log(`Sum of digits of ${num} is ${sum}`);
}

function revString(s) {
    result = ''
    for (let each of s) {
        result = each + result
        console.log(result);
    }
    console.log(result);
}

function palindrome(s) {
    result = ''
    for (let each of s) {
        result = each + result
        // console.log(result);
    }
    if (s === result) {
        console.log('Palindrome');
    } else {
        console.log('Not a Palindrome');
    }
}

// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

// num = 12345
// console.log(num % 10);
// console.log(Math.floor(num / 10));


