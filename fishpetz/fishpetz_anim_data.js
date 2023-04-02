//FISHPETZ ANIMATION DATA
//ANZOL

/*ANIMATION TARGETS!*/

var target_00 = document.getElementById('FISH');

/*TOTAL FRAMES FOR EACH RESPECTIVE TARGET*/

//TARGET ONE: FISH

var frame_01 = 'fishframes/spin-1.png';
var frame_02 = 'fishframes/spin-2.png';
var frame_03 = 'fishframes/spin-3.png';
var frame_04 = 'fishframes/spin-4.png';
var frame_05 = 'fishframes/spin-5.png';
var frame_06 = 'fishframes/spin-6.png';
var frame_07 = 'fishframes/spin-7.png';
var frame_08 = 'fishframes/spin-8.png';

var frame_09 = 'fishframes/submerge-1.png';
var frame_10 = 'fishframes/submerge-2.png';
var frame_11 = 'fishframes/submerge-3.png';
var frame_12 = 'fishframes/submerge-4.png';
var frame_13 = 'fishframes/submerge-5.png';
var frame_14 = 'fishframes/submerge-6.png';
var frame_15 = 'fishframes/submerge-7.png';
var frame_16 = 'fishframes/submerge-8.png';

var frame_17 = 'fishframes/bubble-1.png';
var frame_18 = 'fishframes/bubble-2.png';
var frame_19 = 'fishframes/bubble-3.png';

var frame_20 = 'fishframes/emerge-1.png';
var frame_21 = 'fishframes/emerge-2.png';
var frame_22 = 'fishframes/emerge-3.png';
var frame_23 = 'fishframes/emerge-4.png';
var frame_24 = 'fishframes/emerge-5.png';

var frame_25 = 'fishframes/color-1.png';
var frame_26 = 'fishframes/color-2.png';
var frame_27 = 'fishframes/color-3.png';
var frame_28 = 'fishframes/color-4.png';
var frame_29 = 'fishframes/color-5.png';
var frame_30 = 'fishframes/color-6.png';
var frame_31 = 'fishframes/color-7.png';
var frame_32 = 'fishframes/color-8.png';

var frame_33 = 'fishframes/green-spin-1.png';
var frame_34 = 'fishframes/green-spin-2.png';
var frame_35 = 'fishframes/green-spin-3.png';
var frame_36 = 'fishframes/green-spin-4.png';
var frame_37 = 'fishframes/green-spin-5.png';
var frame_38 = 'fishframes/green-spin-6.png';
var frame_39 = 'fishframes/green-spin-7.png';
var frame_40 = 'fishframes/green-spin-8.png';

var frame_41 = 'fishframes/green-submerge-1.png';
var frame_42 = 'fishframes/green-submerge-2.png';
var frame_43 = 'fishframes/green-submerge-3.png';
var frame_44 = 'fishframes/green-submerge-4.png';
var frame_45 = 'fishframes/green-submerge-5.png';
var frame_46 = 'fishframes/green-submerge-6.png';
var frame_47 = 'fishframes/green-submerge-7.png';
var frame_48 = 'fishframes/green-submerge-8.png';

var frame_49 = 'fishframes/green-emerge-1.png';
var frame_50 = 'fishframes/green-emerge-2.png';
var frame_51 = 'fishframes/green-emerge-3.png';
var frame_52 = 'fishframes/green-emerge-4.png';
var frame_53 = 'fishframes/green-emerge-5.png';

var frame_54 = 'fishframes/reverse-color-1.png';
var frame_55 = 'fishframes/reverse-color-2.png';
var frame_56 = 'fishframes/reverse-color-3.png';
var frame_57 = 'fishframes/reverse-color-4.png';
var frame_58 = 'fishframes/reverse-color-5.png';
var frame_59 = 'fishframes/reverse-color-6.png';
var frame_60 = 'fishframes/reverse-color-7.png';
var frame_61 = 'fishframes/reverse-color-8.png';

var frame_62 = 'fishframes/blob-in-1.png';
var frame_63 = 'fishframes/blob-in-2.png';
var frame_64 = 'fishframes/blob-in-3.png';

var frame_65 = 'fishframes/blob-1.png';
var frame_66 = 'fishframes/blob-2.png';
var frame_67 = 'fishframes/blob-3.png';

var frame_68 = 'fishframes/blob-out-1.png';
var frame_69 = 'fishframes/blob-out-2.png';

var frame_70 = 'fishframes/green-blob-in-1.png';
var frame_71 = 'fishframes/green-blob-in-2.png';
var frame_72 = 'fishframes/green-blob-in-3.png';

var frame_73 = 'fishframes/green-blob-1.png';
var frame_74 = 'fishframes/green-blob-2.png';
var frame_75 = 'fishframes/green-blob-3.png';

var frame_76 = 'fishframes/green-blob-out-1.png';
var frame_77 = 'fishframes/green-blob-out-2.png';

/*ARRAYS FOR EACH ANIMATION SUBSET*/
//STATE MACHINE HANDLES PASSIVE AND ACTIVE ANIMATION SETS
//EACH STATE (SET) MAY CONTAIN SUBSETS! ALLOWING FOR THINGS LIKE RARE FRAMES
//SETS OF FRAMES COMPOSE EACH SUBSET
//PASSIVE ANIMATION SETS HAVE WEIGHTS FOR THEIR SUBSETS, SO THAT THE ANIMATION CHOOSES ITS OWN COURSE

//TARGET ONE

//PASSIVE STATE ONE
var spin_array = [frame_01, frame_02, frame_03, frame_04, frame_05, frame_06, frame_07, frame_08];
var submerge_array = [frame_09, frame_10, frame_11, frame_12, frame_13, frame_14, frame_15, frame_16];
var bubbles_array = [frame_17, frame_18, frame_19];
var emerge_array = [frame_20, frame_21, frame_22, frame_23, frame_24];
var color_array = [frame_25, frame_26, frame_27, frame_28, frame_29, frame_30, frame_31, frame_32];

//PASSIVE STATE TWO
var green_spin_array = [frame_33, frame_34, frame_35, frame_36, frame_37, frame_38, frame_39, frame_40];
var green_submerge_array = [frame_41, frame_42, frame_43, frame_44, frame_45, frame_46, frame_47, frame_48];
var green_bubbles_array = [frame_17, frame_18, frame_19];
var green_emerge_array = [frame_49, frame_50, frame_51, frame_52, frame_53];
var green_color_array = [frame_54, frame_55, frame_56, frame_57, frame_58, frame_59, frame_60, frame_61];

//ACTIVE STATE ONE
var blob_in_array = [frame_62, frame_63, frame_64];
var blob_array = [frame_65, frame_66, frame_67];
var blob_out_array = [frame_68, frame_69];

//ACTIVE STATE TWO
var green_blob_in_array = [frame_70, frame_71, frame_72];
var green_blob_array = [frame_73,frame_74, frame_75];
var green_blob_out_array = [frame_76, frame_77];

/*WEIGHTS*/
//LIKELIHOOD OF A GIVEN SUBSTATE TO BE CHOSEN AFTER THE NAMED STATE COMPLETES A LOOP
//LISTED IN ORDER OF THEIR RESPECTIVE APPEARANCE WITHIN EACH GROUP'S WEIGHT ARRAY

//TARGET ONE

//PASSIVE STATE ONE
var spin_substate_weights = [0.7, 0.3, 0, 0, 0];
var submerge_substate_weights = [0, 0, 1, 0, 0];
var bubbles_substate_weights = [0, 0, 0.8, 0.2, 0];
var emerge_substate_weights = [1, 0, 0, 0, 0];
var color_substate_weights = [1, 0, 0, 0, 0];

//PASSIVE STATE TWO
var green_spin_substate_weights = [0.7, 0.3, 0, 0, 0];
var green_submerge_substate_weights = [0, 0, 1, 0, 0];
var green_bubbles_substate_weights = [0, 0, 0.8, 0.2, 0];
var green_emerge_substate_weights = [1, 0, 0, 0, 0];
var green_color_substate_weights = [1, 0, 0, 0, 0];

//ACTIVE STATE ONE
var blob_in_substate_weights = [0, 1, 0];
var blob_substate_weights = [0, 0, 1];
var blob_out_substate_weights = [1, 0, 0];

//ACTIVE STATE TWO
var green_blob_in_substate_weights = [0, 1, 0];
var green_blob_substate_weights = [0, 0, 1];
var green_blob_out_substate_weights = [1, 0, 0];