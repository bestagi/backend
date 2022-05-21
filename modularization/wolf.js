class wolf {
    constructor() {
        this.strength = Math.floor(Math.random()*100);
    }

    howl() {
        console.log("owwoooo!")
    }
}

// TODO 2
module.exports = wolf;