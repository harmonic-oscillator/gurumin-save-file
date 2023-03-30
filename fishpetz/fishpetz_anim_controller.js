//FISHPETZ ANIMATION CONTROLLER
//ANZOL

//HUH?
class animState {
	constructor(frames_reference, weighting_reference) {
		this.frames = frames_reference;
		this.weighting = weighting_reference;
	}
}

//WHAT?

var state_spin = new animState (spin_array, spin_state_weighting);
var state_submerge = new animState (submerge_array, submerge_state_weighting);
var state_bubbles = new animState (bubbles_array, bubbles_state_weighting);
var state_emerge = new animState (emerge_array, emerge_state_weighting);
var state_color = new animState (color_array, color_state_weighting);

var state_green_spin  = new animState (green_spin_array, green_spin_state_weighting);
var state_green_submerge = new animState (green_submerge_array, green_submerge_state_weighting);
var state_green_bubbles = new animState (green_bubbles_array, green_bubbles_state_weighting);
var state_green_emerge = new animState (green_emerge_array, green_emerge_state_weighting);
var state_green_color = new animState (green_color_array, green_color_state_weighting);

//DEFINE SETS OF ANIMATIONS (A SET IS THE TOTALITY OF INTANTIATED ANIM SUBSETS (STATES) FOR A GIVEN IMG ID)
var set_00 = [state_spin, state_submerge, state_bubbles, state_emerge, state_color, state_green_spin, state_green_submerge, state_green_bubbles, state_green_emerge, state_green_color];



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

/* SETINTERVALS! */
//INSTANTIATE ANIMATIONS, RUN THEM THROUGH THE CONTROLLER USING SETINTERVAL. SECOND VALUE IS FRAMERATE
var anim_00 = new animStruct(anim_img_id_00, set_00, false);
var t_00 = setInterval(function(){animController.updateAnim(anim_00)},100);


//FRAME-BY-FRAME HANDLER, STATE SWITCHER
class animController {	//CHECKS FOR NULL VALUE, CHECKS FOR PLAY DIRECTION AND RUNS RESPECTIVE UPDATE LOOP
	static updateAnim(anim) {
		if (anim.img_id == null) {return;}
		if (!anim.reversal_boolean) {this.#updateForward(anim);}
		else {this.#updateReverse(anim);}
	}
	
	static #updateForward (anim) {
		anim.current_frame++;
		if (anim.current_frame >= anim.set[anim.current_state].frames.length) {
			anim.current_frame = 0;
			stateMachine.stateDeterminer(anim); //RUNS THE STATE MACHINE AT THE END OF EACH LOOP
		}
		anim.img_id.src = anim.set[anim.current_state].frames[anim.current_frame];
		console.log("[" + anim.current_state + "] [" + anim.current_frame + "]");
	}
	
	static #updateReverse (anim) {
		anim.current_frame--;
		if (anim.current_frame < 0) {
			anim.current_frame = anim.set[anim.current_state].frames.length - 1;
			stateMachine.stateDeterminer(anim); //RUNS THE STATE MACHINE AT THE END OF EACH LOOP
		}
		anim.img_id.src = anim.set[anim.current_state].frames[anim.current_frame];
		console.log("[" + anim.current_state + "] [" + anim.current_frame + "]");
	}
}
class stateMachine {
	static stateDeterminer (anim) {
		console.log("STATE MACHINE! [" + anim.current_state + "] [" + anim.current_frame + "]");
		var r = Math.random();
		console.log(r);
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
}