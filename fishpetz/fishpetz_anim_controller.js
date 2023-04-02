//FISHPETZ ANIMATION CONTROLLER
//ANZOL

/*CLASSES*/

//BUILD EACH STATE'S ANIMATIONS!
//COMPONENTS: TARGET (IMG ID), SET (GROUP OF SUBSTATES), INITIAL SUBSTATE (SET[0]), REVERSAL BOOLEAN (ANIM PLAY DIRECTION)
class animState {
	constructor(target, set, reversal_boolean) {
		this.target = target;
		this.set = set;
		this.currentSubstate = 0;
		this.reversal_boolean = reversal_boolean;
		//SETS CURRENT SRC FRAME BASED ON REVERSAL BOOLEAN. FORWARD = FRAME 0, REVERSE = LAST FRAME
		if(!this.reversal_boolean) {this.currentFrame = 0;}
		else {this.currentFrame = this.set[this.currentSubstate].frames.length - 1;}
		this.target.src = this.set[this.currentSubstate].frames[this.currentFrame];
	}
}

//PAIRS ANIMATION SUBSETS WITH THEIR WEIGHTS
//ANIMSTATES PROVIDE ALL ASSETS FOR ANY "STATE" IN THE STATE MACHINE, COMPOSED BY GROUPS OF SUBSTATES
//IF BLOCKER IS TRUE, STATE CANNOT SWITCH AFTER SUBSTATE IS PLAYED (INNER-TRANSITIONAL STATES PROBABLY BLOCK)
//IF BLOCKER IS FALSE, STATE CAN SWITCH SEAMLESSLY AFTER SUBSTATE IS FINISHED
class substate {
	constructor(tag, frames, weights, blocker) {
		this.tag = tag;
		this.frames = frames;
		this.weights = weights;
		this.blocker = blocker;
	}
}

/*VARIABLES*/

var looperCue = false; //STATES CANNOT SWITCH UNTIL AN ANIMATION SEQUENCE FINISHES AND GIVES THIS CUE
var currentAnim;

var substate_spin = new substate ("SPIN", spin_array, spin_substate_weights, false);
var substate_submerge = new substate ("SUBMERGE", submerge_array, submerge_substate_weights, true);
var substate_bubbles = new substate ("BUBBLES", bubbles_array, bubbles_substate_weights, false);
var substate_emerge = new substate ("EMERGE", emerge_array, emerge_substate_weights, true);
var substate_color = new substate ("COLOR", color_array, color_substate_weights, false);

var substate_green_spin  = new substate ("GREEN SPIN", green_spin_array, green_spin_substate_weights, false);
var substate_green_submerge = new substate ("GREEN SUBMERGE", green_submerge_array, green_submerge_substate_weights, true);
var substate_green_bubbles = new substate ("GREEN BUBBLES", green_bubbles_array, green_bubbles_substate_weights, false);
var substate_green_emerge = new substate ("GREEN EMERGE", green_emerge_array, green_emerge_substate_weights, true);
var substate_green_color = new substate ("GREEN COLOR", green_color_array, green_color_substate_weights, false);

var substate_blob_in = new substate ("BLOB IN", blob_in_array, blob_in_substate_weights);
var substate_blob = new substate ("BLOB", blob_array, null);
var substate_blob_out = new substate ("BLOB OUT", blob_out_array, null);

var substate_green_blob_in = new substate ("GREEN BLOB IN", green_blob_in_array, green_blob_in_substate_weights);
var substate_green_blob = new substate ("GREEN BLOB", green_blob_array, null);
var substate_green_blob_out = new substate ("GREEN BLOB OUT", green_blob_out_array, null);

//DEFINE SETS OF ANIMATIONS (A SET IS THE TOTALITY OF SUBSTATES FOR A GIVEN STATE)
var set_00 = [substate_spin, substate_submerge, substate_bubbles, substate_emerge, substate_green_color]; //COLOR TRANSITIONS LIVE IN OPPOSITE STATES
var set_01 = [substate_green_spin, substate_green_submerge, substate_green_bubbles, substate_green_emerge, substate_color];
var set_02 = [substate_blob_in, substate_blob, substate_blob_out];
var set_03 = [substate_green_blob_in, substate_green_blob, substate_green_blob_out];

/*SETINTERVALS!*/

//INSTANTIATE ANIMATIONS, RUN THEM THROUGH THE CONTROLLER USING SETINTERVAL. NUMERIC VALUE IS FRAMERATE
var animState_00 = new animState(target_00, set_00, false);
var animState_01 = new animState(target_00, set_01, false);
var animState_02 = new animState(target_00, set_02, false);
var animState_03 = new animState(target_00, set_03, false);

var t = setInterval(function(){updateAnim()},100);

/*FUNCTIONS*/

function animInit() {currentAnim = animState_00;}

function updateAnim() { //LISTENS FOR STATE MACHINE'S CURRENT STATE AND SETS ANIMATION ACCORDINGLY
	if (isPassive) {
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
	}
	
	else if (!isPassive) {
		if (currentState == 2) {
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
}

function updateForward(anim) {
	if (anim.currentFrame >= anim.set[anim.currentSubstate].frames.length) {
		
		looper(anim); //RUNS THE LOOPER AT THE END OF EACH FRAME SEQUENCE
		looperCue = true;
		anim.currentFrame = 0;
	}
	anim.target.src = anim.set[anim.currentSubstate].frames[anim.currentFrame];
	console.log("[" + currentState + "] [" + anim.currentSubstate + ": " + anim.set[anim.currentSubstate].tag + "] [" + anim.currentFrame + "]");
	anim.currentFrame++;
	
}

function updateReverse(anim) {
	anim.currentFrame--;
	if (anim.currentFrame < 0) {
		anim.currentFrame = anim.set[anim.currentSubstate].frames.length - 1;
		looper(anim); //RUNS THE LOOPER AT THE END OF EACH FRAME SEQUENCE
	}
	anim.target.src = anim.set[anim.currentSubstate].frames[anim.currentFrame];
}

//RUNS A CHECKPOINT AT THE END OF EACH SUBSET LOOP
//CHOOSES NEXT SUBSET DURING PASSIVE STATES
//ALLOWS STATE CHANGES TO RUN AT THE END OF A PRIOR SUBSTATE LOOP (?????????????????????????????)

function looper(anim) {
	//console.log("LOOPER! [" + currentState + "] [" + anim.currentSubstate + "] [" + anim.currentFrame + "]");
	var r = Math.random();
	//console.log(r);
	if (anim.set[anim.currentSubstate].weights == null) {return;}
	//WEIGHTS ROUTINE
	//ADD UP ALL WEIGHTS (IN THIS CASE THEY WILL ALWAYS ADD TO 1)
	//IF R IS LESS THAN THE FIRST WEIGHT, CHOOSE THE FIRST WEIGHT
	//IF R IS GREATER THAN THE FIRST WEIGHT, SUBTRACT THAT WEIGHT FROM R
	//IF R IS LESS THAN THE SECOND WEIGHT, CHOOSE THE SECOND WEIGHT
	//AND SO ON
	for (let i = 0; i < anim.set[anim.currentSubstate].weights.length; i++) {
		if (r < anim.set[anim.currentSubstate].weights[i]) {
			anim.currentSubstate = i;
			console.log("Swap Substate: " + anim.currentSubstate);
			break;
		}
		else {r -= anim.set[anim.currentSubstate].weights[i];}
	}
}

function getSubstate() {return currentAnim.currentSubstate;}
function getSubstateBlocker() {return currentAnim.set[currentAnim.currentSubstate].blocker;}

function beginTransition (x)
{
	currentAnim.currentSubstate = x;
	currentAnim.currentFrame = 0;
}