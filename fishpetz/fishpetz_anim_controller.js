//FISHPETZ ANIMATION CONTROLLER
//ANZOL

/*CLASSES*/


class animState {
	constructor(target, set, reversal_boolean) {
		this.target = target;
		this.set = set;
		this.substateIndex = 0;
		this.reversal_boolean = reversal_boolean;
		
		if(!this.reversal_boolean) {this.currentFrame = 0;}
		else {this.currentFrame = this.set[this.substateIndex].frames.length - 1;}
		this.target.src = this.set[this.substateIndex].frames[this.currentFrame];
	}
}

class substate {
	constructor(tag, frames, weights, blocker) {
		this.tag = tag;
		this.frames = frames;
		this.weights = weights;
		this.blocker = blocker;
	}
}

/*VARIABLES*/

var looperCue = false;
var currentAnim;

var substate_spin = new substate ("SPIN", spin_array, spin_substate_weights, false);
var substate_submerge = new substate ("SUBMERGE", submerge_array, submerge_substate_weights, true);
var substate_bubbles = new substate ("BUBBLES", bubbles_array, bubbles_substate_weights, false);
var substate_emerge = new substate ("EMERGE", emerge_array, emerge_substate_weights, true);
var substate_color = new substate ("COLOR", color_array, color_substate_weights, true);

var substate_green_spin  = new substate ("GREEN SPIN", green_spin_array, green_spin_substate_weights, false);
var substate_green_submerge = new substate ("GREEN SUBMERGE", green_submerge_array, green_submerge_substate_weights, true);
var substate_green_bubbles = new substate ("GREEN BUBBLES", green_bubbles_array, green_bubbles_substate_weights, false);
var substate_green_emerge = new substate ("GREEN EMERGE", green_emerge_array, green_emerge_substate_weights, true);
var substate_green_color = new substate ("GREEN COLOR", green_color_array, green_color_substate_weights, true);

var substate_blob_in = new substate ("BLOB IN", blob_in_array, blob_in_substate_weights, false);
var substate_blob = new substate ("BLOB", blob_array, blob_substate_weights, false);
var substate_blob_out = new substate ("BLOB OUT", blob_out_array, blob_out_substate_weights, false);

var substate_green_blob_in = new substate ("GREEN BLOB IN", green_blob_in_array, green_blob_in_substate_weights, false);
var substate_green_blob = new substate ("GREEN BLOB", green_blob_array, green_blob_substate_weights, false);
var substate_green_blob_out = new substate ("GREEN BLOB OUT", green_blob_out_array, green_blob_out_substate_weights, false);


var set_00 = [substate_spin, substate_submerge, substate_bubbles, substate_emerge, substate_green_color];
var set_01 = [substate_green_spin, substate_green_submerge, substate_green_bubbles, substate_green_emerge, substate_color];
var set_02 = [substate_blob_in, substate_blob, substate_blob_out];
var set_03 = [substate_green_blob_in, substate_green_blob, substate_green_blob_out];

/*SETINTERVALS!*/

var animState_00 = new animState(target_00, set_00, false);
var animState_01 = new animState(target_00, set_01, false);
var animState_02 = new animState(target_00, set_02, false);
var animState_03 = new animState(target_00, set_03, false);

var t = setInterval(function(){updateAnim()},100);

/*FUNCTIONS*/

function animInit() {currentAnim = animState_00;}

function updateAnim() {
	console.log("Current State: " + currentState);
	if (currentState == 0) {
		currentAnim = animState_00;
		if (animState_00.target == null) {return;}
		if (!animState_00.reversal_boolean) {this.updateForward(animState_00);}
		else {this.updateReverse(animState_00);}
	}
	else if (currentState == 1) {
		currentAnim = animState_01;
		if (animState_01.target == null) {return;}
		if (!animState_01.reversal_boolean) {this.updateForward(animState_01);}
		else {this.updateReverse(animState_01);}
	}
	else if (currentState == 2) {
		currentAnim = animState_02;
		if (animState_02.target == null) {return;}
		if (!animState_02.reversal_boolean) {this.updateForward(animState_02);}
		else {this.updateReverse(animState_02);}
	}
	else if (currentState == 3) {
		currentAnim = animState_03;
		if (animState_03.target == null) {return;}
		if (!animState_03.reversal_boolean) {this.updateForward(animState_03);}
		else {this.updateReverse(animState_03);}
	}
}

function updateForward(anim) {
	anim.target.src = anim.set[anim.substateIndex].frames[anim.currentFrame];
	console.log("[" + currentState + "] [" + anim.substateIndex + ": " + anim.set[anim.substateIndex].tag + "] [" + anim.currentFrame + "]");
	
	anim.currentFrame++;
	
	if (anim.currentFrame >= anim.set[anim.substateIndex].frames.length) {
		if (!anim.set[anim.substateIndex].blocker) {stateChange();}
		looper(anim);
		anim.currentFrame = 0;
	}
}

function looper(anim) {
	var r = Math.random();
	if (anim.set[anim.substateIndex].weights == null) {return;}

	for (let i = 0; i < anim.set[anim.substateIndex].weights.length; i++) {
		if (r < anim.set[anim.substateIndex].weights[i]) {
			anim.substateIndex = i;
			break;
		}
		else {r -= anim.set[anim.substateIndex].weights[i];}
	}
}

function animStateChange (x) {
	console.log("I FED ANIMSTATECHANGE THIS NUMBER: (" + x + ")");
	
	switch(x) {
		case 0:
		animSubstateChange(animState_00);
		currentAnim = animState_00;
		break;
		
		case 1:
		animSubstateChange(animState_01);
		currentAnim = animState_01;
		break;
		
		case 2:
		currentAnim = animState_02;
		break;
		
		default:
		currentAnim = animState_03;
		
	}
	currentAnim.currentFrame = 0;
}

function animSubstateChange (nextAnim) {
		 if (currentAnim.substateIndex == 0) {nextAnim.substateIndex = 4;}
	else if (currentAnim.substateIndex == 1) {nextAnim.substateIndex = 1; console.log("IF U SEE DIS MESSAGE U BAD AT CODE");}
	else if (currentAnim.substateIndex == 2) {nextAnim.substateIndex = 2;}
	else if (currentAnim.substateIndex == 3) {nextAnim.substateIndex = 3; console.log("IF U SEE DIS MESSAGE U BAD AT CODE");}
	else if (currentAnim.substateIndex == 4) {nextAnim.substateIndex = 0; console.log("IF U SEE DIS MESSAGE DAT MEAN DIS LIFE BE CONFUSEIN");}
}

function getSubstate() {return currentAnim.substateIndex;}
function getSubstateBlocker() {return currentAnim.set[currentAnim.substateIndex].blocker;}