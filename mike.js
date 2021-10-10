const showMike = (name, race) => {
    const rollDice = Math.floor(Math.random() * 10)
    const greeting = `hello my name is ${name} and I am ${race} my favorite number is ${rollDice}`
    return greeting
}
console.log(showMike("mike", "latvian"))
class person {
    constructor(name, race) {
        this.id = name
        this.race = race
    }
    introduce() {
        return `hello my name is ${this.id} and I am ${this.race} my coin flip is ${this.coinFlip()}`
    }
    coinFlip() {
        const randomNumber = Math.floor(Math.random() * 10)
        if(randomNumber > 5) {
            return "heads"
        } else return "tails"
    }
    gameLogic() {
        const playerA = eddie
        const playerB = moose
        if(playerA.coinFlip === person.coinFlip) {
            return "the winner is playerA"
        } else return "the winner is playerB"
    }
}
const eddie = new person('eddie', 'white')
const moose = new person('moose', 'redheaded')
console.log(eddie.introduce())
console.log(moose.introduce())