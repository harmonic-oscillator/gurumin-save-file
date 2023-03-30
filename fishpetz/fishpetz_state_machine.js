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
var isPassive;

var passiveState0_weights = [0.999, 0.001, 0, 0];
var passiveState1_weights = [0.001, 0.999, 0, 0];

var passiveState0 = new state("SPIN IDLE", passiveState0_weights);
var passiveState1 = new state("GREEN SPIN IDLE", passiveState1_weights);

var activeState0 = new state("BLOB", null);
var activeState1 = new state("GREEN BLOB", null);

var statesList = [passiveState0, passiveState1, activeState0, activeState1];

/*FUNCTIONS*/

function init() {
	currentState = 0;
	isPassive = true;
}

function update() {
	//loop magic
	window.requestAnimationFrame(update);
	//frame-by-frame updates
	updateStateMachine();
}

function updateStateMachine() {
	console.log ("STATUS: [" + statesList[currentState].tag + "]");
	
	//weights determine frame-by-frame which passive state is the current state
	if (isPassive) {passiveStates();}
	//current state can be overridden with unique states in certain cases
	else if (!isPassive) {activeStates();}
}

function passiveStates() {
	var r = Math.random();
	//WEIGHTS ROUTINE
		//ADD UP ALL WEIGHTS (IN THIS CASE THEY WILL ALWAYS ADD TO 1)
		//IF R IS LESS THAN THE FIRST WEIGHT, CHOOSE THE FIRST WEIGHT
		//IF R IS GREATER THAN THE FIRST WEIGHT, SUBTRACT THAT WEIGHT FROM R
		//IF R IS LESS THAN THE SECOND WEIGHT, CHOOSE THE SECOND WEIGHT
		//AND SO ON
		for (let i = 0; i < statesList[currentState].weights.length; i++) {
			if (r < statesList[currentState].weights[i]) {
				currentState = i;
				break;
			}
			else {r -= statesList[currentState].weights[i];}
		}
	//pair the wandering passive state with some locomotion code	
	if (currentState == 1) {locomotion();};
}

function locomotion () {
	//console.log("WALKIN AROUND");
}

function activeStates() {
	//user toggles this one on and off
	
	//user triggers this event and the duration is determined by a chain of html elements instantiating and completing animating
}

function button() {
	if (isPassive == true) {
		isPassive = false;
		//version of active state is paired with a version of the current passive state
		if (currentState == 0) {currentState = [2];}
		else if (currentState == 1) {currentState = [3];}
	}
	else if (!isPassive) {
		isPassive = true;
		if (currentState == 2) {currentState = [0];}
		else if (currentState == 3) {currentState = [1];}
	}
	
}

/*GO!*/
init();
update();