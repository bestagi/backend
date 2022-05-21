class tiger {
    constructor() {
        this.strength = Math.floor(Math.random()*100);
    }

    growl() {
        console.log("grrr!")
    }
}
// TODO 1
module.exports = tiger;