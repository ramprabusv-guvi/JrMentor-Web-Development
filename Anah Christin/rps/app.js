const ops = ['r', 'p', 's']

random_option = Math.floor(Math.random() * 3)
console.log(ops[random_option])
function rps(p1, p2 = ops[random_option]) {
    if (p1 === 'r' && p2 === 's') {
        console.log('Player 1 wins')
    } else if (p1 === 's' && p2 === 'r') {
        console.log('Player 2 wins')
    } else if (p1 === 'r' && p2 === 'p') {
        console.log('Player 2 wins')
    } else if (p1 === 'p' && p2 === 'r') {
        console.log('Player 1 wins')
    } else if (p1 === 's' && p2 === 'p') {
        console.log('Player 1 wins')
    } else if (p1 === 'p' && p2 === 's') {
        console.log('Player 2 wins')
    } else if (p1 === p2) {
        console.log('It is a Tie')
    } else {
        console.log('Invalid Option')
    }
}

console.log('Welcome to Rock Paper Scissor Game')
console.log("To start type: rps(p1:r or p or s,p2: r or p or s")

// r s
// s r
// r p
// p r
// s p
// p s
// r r
// p p
// s s