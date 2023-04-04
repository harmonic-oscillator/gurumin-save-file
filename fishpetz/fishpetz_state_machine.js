//FISHPETZ STATE MACHINE
//ANZOL

/*CLASSES*/

class state {
	constructor(tag, weights) {
		this.tag = tag;
		this.weights = weights;
	}
}

/*VARIABLES*/

var currentState;

var passiveState0_weights = [0.7, 0.3, 0, 0];
var passiveState1_weights = [0.3, 0.7, 0, 0];

var passiveState0 = new state("SPIN IDLE", passiveState0_weights);
var passiveState1 = new state("GREEN SPIN IDLE", passiveState1_weights);

var activeState0 = new state("BLOB", 1);
var activeState1 = new state("GREEN BLOB", 1);

var statesList = [passiveState0, passiveState1, activeState0, activeState1];

/*FUNCTIONS*/

function init() {
	currentState = 0;
	animInit();
}

function update() {
	window.requestAnimationFrame(update);
}

function stateChange(){
	var r = Math.random();
	for (let i = 0; i < statesList[currentState].weights.length; i++) {
		if (r < statesList[currentState].weights[i]) {
			if(currentState != i)
			{
				currentState = i;
				animStateChange(i);
				
				break;
			}
		}
		else {r -= statesList[currentState].weights[i];}
	}
}

function button() {
			 if (currentState == 0) {currentState = [2];}
		else if (currentState == 1) {currentState = [3];}
		else if (currentState == 2) {currentState = [0];}
		else if (currentState == 3) {currentState = [1];}
}

/*GO!*/

init();
update();