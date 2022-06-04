// TODO 3
const tiger = require("./tiger")
// TODO 4
const wolf = require("./wolf")

const fighting = (tiger, wolf) => {
    if(tiger.strength > wolf.strength) {
        tiger.growl();
        return;
    }

    if(wolf.strength > tiger.strength) {
        wolf.howl();
        return;
    }
    console.log("Tiger and Wolf have same strength");
}

const singa = new tiger();
const serigala = new wolf();

fighting(singa, serigala);