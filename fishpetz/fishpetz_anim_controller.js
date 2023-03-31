//FISHPETZ ANIMATION CONTROLLER
//ANZOL

/*CLASSES*/

//HUH?
class substate {
	constructor(frames_reference, weighting_reference) {
		this.frames = frames_reference;
		this.weighting = weighting_reference;
	}
}

//BUILD THE ANIMATION!
//COMPONENTS OF EACH ANIMATION: IMG ID, ANIM SET, INITIAL STATE (ANIM SET[0]), REVERSAL BOOLEAN (ANIM PLAY DIRECTION)
class animStruct {
	constructor(img_id_reference, set_reference, reversal_boolean_reference) {
		this.img_id = img_id_reference;
		this.set = set_reference;
		this.current_state = 0;
		this.reversal_boolean = reversal_boolean_reference;
		//SETS CURRENT SRC FRAME BASED ON REVERSAL BOOLEAN. FORWARD = FRAME 0, REVERSE = LAST FRAME
		if(!this.reversal_boolean) {this.current_frame = 0;}
		else {this.current_frame = this.set[this.current_state].frames.length - 1;}
		this.img_id.src = this.set[this.current_state].frames[this.current_frame];
	}
}

function updateAnim () {
	if (isPassive) {
		if (currentState == 0) {
			if (anim_state_00.img_id == null) {return;}
			if (!anim_state_00.reversal_boolean) {this.updateForward(anim_state_00);}
			else {this.updateReverse(anim_state_00);}
		}
		else if (currentState == 1) {
			if (anim_state_01.img_id == null) {return;}
			if (!anim_state_01.reversal_boolean) {this.updateForward(anim_state_01);}
			else {this.updateReverse(anim_state_01);}
		}
	}
	
	else if (!isPassive) {
		if (currentState == 2) {
		if (anim_state_02.img_id == null) {return;}
		if (!anim_state_02.reversal_boolean) {this.updateForward(anim_state_02);}
		else {this.updateReverse(anim_state_02);}
	}
	else if (currentState == 3) {
		if (anim_state_03.img_id == null) {return;}
		if (!anim_state_03.reversal_boolean) {this.updateForward(anim_state_03);}
		else {this.updateReverse(anim_state_03);}
	}
	}
}

function updateForward (anim) {
	anim.current_frame++;
	if (anim.current_frame >= anim.set[anim.current_state].frames.length) {
		anim.current_frame = 0;
		stateDeterminer(anim); //RUNS THE STATE MACHINE AT THE END OF EACH LOOP
	}
	anim.img_id.src = anim.set[anim.current_state].frames[anim.current_frame];
	console.log("[" + anim.current_state + "] [" + anim.current_frame + "]");
}

function updateReverse (anim) {
	anim.current_frame--;
	if (anim.current_frame < 0) {
		anim.current_frame = anim.set[anim.current_state].frames.length - 1;
		stateDeterminer(anim); //RUNS THE STATE MACHINE AT THE END OF EACH LOOP
	}
	anim.img_id.src = anim.set[anim.current_state].frames[anim.current_frame];
	console.log("[" + anim.current_state + "] [" + anim.current_frame + "]");
}

//RUNS A CHECKPOINT AT THE END OF EACH SUBSET LOOP
//CHOOSES NEXT SUBSET DURING PASSIVE STATES
//ALLOWS ACTIVE STATES TO RUN AT THE END OF A PRIOR SUBSTATE LOOP

function stateDeterminer (anim) {
	console.log("STATE MACHINE! [" + anim.current_state + "] [" + anim.current_frame + "]");
	var r = Math.random();
	console.log(r);
	if (anim.set[anim.current_state].weighting == null) {return;}
	//WEIGHTS ROUTINE
	//ADD UP ALL WEIGHTS (IN THIS CASE THEY WILL ALWAYS ADD TO 1)
	//IF R IS LESS THAN THE FIRST WEIGHT, CHOOSE THE FIRST WEIGHT
	//IF R IS GREATER THAN THE FIRST WEIGHT, SUBTRACT THAT WEIGHT FROM R
	//IF R IS LESS THAN THE SECOND WEIGHT, CHOOSE THE SECOND WEIGHT
	//AND SO ON
	for (let i = 0; i < anim.set[anim.current_state].weighting.length; i++) {
		if (r < anim.set[anim.current_state].weighting[i]) {
			anim.current_state = i;
			break;
		}
		else {r -= anim.set[anim.current_state].weighting[i];}
	}
	
}


/*VARIABLES*/

var substate_spin = new substate (spin_array, spin_substate_weighting);
var substate_submerge = new substate (submerge_array, submerge_substate_weighting);
var substate_bubbles = new substate (bubbles_array, bubbles_substate_weighting);
var substate_emerge = new substate (emerge_array, emerge_substate_weighting);
var substate_color = new substate (color_array, color_substate_weighting);

var substate_green_spin  = new substate (green_spin_array, green_spin_substate_weighting);
var substate_green_submerge = new substate (green_submerge_array, green_submerge_substate_weighting);
var substate_green_bubbles = new substate (green_bubbles_array, green_bubbles_substate_weighting);
var substate_green_emerge = new substate (green_emerge_array, green_emerge_substate_weighting);
var substate_green_color = new substate (green_color_array, green_color_substate_weighting);

var substate_blob_in = new substate (blob_in_array, blob_in_substate_weighting);
var substate_blob = new substate (blob_array, null);
var substate_blob_out = new substate (blob_out_array, null);

var substate_green_blob_in = new substate (green_blob_in_array, green_blob_in_substate_weighting);
var substate_green_blob = new substate (green_blob_array, null);
var substate_green_blob_out = new substate (green_blob_out_array, null);

//DEFINE SETS OF ANIMATIONS (A SET IS THE TOTALITY OF INTANTIATED ANIM SUBSETS (STATES) FOR A GIVEN IMG ID)
var set_00 = [substate_spin, substate_submerge, substate_bubbles, substate_emerge, substate_green_color];
var set_01 = [substate_green_spin, substate_green_submerge, substate_green_bubbles, substate_green_emerge, substate_color];
var set_02 = [substate_blob_in, substate_blob, substate_blob_out];
var set_03 = [substate_green_blob_in, substate_green_blob, substate_green_blob_out];

/* SETINTERVALS! */

//INSTANTIATE ANIMATIONS, RUN THEM THROUGH THE CONTROLLER USING SETINTERVAL. NUMERIC VALUE IS FRAMERATE
var anim_state_00 = new animStruct(anim_img_id_00, set_00, false);
var anim_state_01 = new animStruct(anim_img_id_00, set_01, false);
var anim_state_02 = new animStruct(anim_img_id_00, set_02, false);
var anim_state_03 = new animStruct(anim_img_id_00, set_03, false);

var t_00 = setInterval(function(){updateAnim()},100);