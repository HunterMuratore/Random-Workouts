var selectedExercise;
var selectedIntensity;
var selectedTraining;
var exercise1;
var reps1;
var exercise2;
var reps2;
var exercise3;
var reps3;
var exercise4;
var reps4;

// Assigns the selected values of the dropdowns to their appropriate variables
$( document ).ready(function() {
    $("#exercise-dropdown").change(() => {
        selectedExercise = $("#exercise-dropdown").find(":selected").val();
    });

    $("#intensity-dropdown").change(() => {
        selectedIntensity = $("#intensity-dropdown").find(":selected").val();
    });

    $("#training-dropdown").change(() => {
        selectedTraining = $("#training-dropdown").find(":selected").val();
    });
});

// Allows user to submit a message only if all required fields are filled out
// $( document ).getElementById("feedback").addEventListener("submit", function(e) {
//     var form = this;
//     if(form.name.value == "") {
//       alert("Please enter your name");
//       form.name.focus();
//       e.preventDefault();
//     } else if(form.email.value == "") {
//       alert("Please enter a valid email address");
//       form.email.focus();
//       e.preventDefault();
//     } else if(form.message.value == "") {
//       alert("Please enter your feedback");
//       form.message.focus();
//       e.preventDefault();
//     }
//   }, false);

// Returns a random element of the specified array
function randomExercise(array) {
    return array[Math.floor(Math.random() * (array.length))];
}

// Generates 4 random, unique exercises from the specified array
function generateExercises(type) {
    exercise1 = randomExercise(type);
    while (exercise2 === undefined || exercise2 === exercise1) {
        exercise2 = randomExercise(type);
    }
    while (exercise3 === undefined || exercise3 === exercise1 || exercise3 === exercise2) {
        exercise3 = randomExercise(type);
    }
    while (exercise4 === undefined || exercise4 === exercise1 || exercise4 === exercise2 || exercise4 === exercise3) {
        exercise4 = randomExercise(type);
    }
}

// Code executed when Generate Workout button is click. Produces a random 4 exercise workout and displays it in an alert
$("#generateButton").click(() => {
    if (selectedExercise === undefined || selectedIntensity === undefined || selectedTraining === undefined) {
        return alert("Must choose one of each");
    } else if ((selectedExercise === "arms" && selectedTraining == "body-weight") || (selectedExercise === "shoulders" && selectedTraining == "body-weight")) {
        return alert(`We do not have a ${selectedTraining} ${selectedExercise} workout available. Please choose another combination.`);
    } 
    else {
        console.log("You chose a %s, %s, %s workout", selectedIntensity, selectedTraining, selectedExercise);
    }

    if (selectedIntensity === "intense" && selectedTraining === "body-weight") {
        reps1 = 20;
        reps2 = 20;
        reps3 = 20;
        reps4 = 20;
    } else if (selectedIntensity === "medium" && selectedTraining === "body-weight") {
        reps1 = 15;
        reps2 = 15;
        reps3 = 15;
        reps4 = 15;
    } else if (selectedIntensity === "light" && selectedTraining === "body-weight") {
        reps1 = 10;
        reps2 = 10;
        reps3 = 10;
        reps4 = 10;
    }

    if (selectedExercise === "chest" && selectedTraining === "strength") {
        generateExercises(chestExercises);
    } else if (selectedExercise === "chest" && selectedTraining === "body-weight") {
        generateExercises(chestBodyWeight);
    } else if (selectedExercise === "legs" && selectedTraining === "strength") {
        generateExercises(legExercises);
    } else if (selectedExercise === "legs" && selectedTraining === "body-weight") {
        generateExercises(legBodyWeight);
    } else if (selectedExercise === "back" && selectedTraining === "strength") {
        generateExercises(backExercises);
    } else if (selectedExercise === "back" && selectedTraining === "body-weight") {
        generateExercises(backBodyWeight);
    } else if (selectedExercise === "arms") {
        generateExercises(armExercises);
    } else if (selectedExercise === "shoulders") {
        generateExercises(shoulderExercises);
    } else if (selectedExercise === "core") {
        generateExercises(coreExercises);
    }
    // else if (selectedExercise === "stretch") {
    //     generateExercises(stretchExercises);
    // }

    if (selectedIntensity === "intense" && selectedTraining === "strength") {
        reps1 = intenseStrengthReps(exercise1);
        reps2 = intenseStrengthReps(exercise2);
        reps3 = intenseStrengthReps(exercise3);
        reps4 = intenseStrengthReps(exercise4);
        alert(`Your workout for today is:\n\n${exercise1}: 4 sets, ${reps1} reps\n${exercise2}: 4 sets, ${reps2} reps\n${exercise3}: 4 sets, ${reps3} reps\n${exercise4}: 4 sets, ${reps4} reps\n\nIt is suggested to use heavier weights for this strength-based workout`);
        resetExercises();
    } else if (selectedIntensity === "medium" && selectedTraining === "strength") {
        reps1 = mediumStrengthReps(exercise1);
        reps2 = mediumStrengthReps(exercise2);
        reps3 = mediumStrengthReps(exercise3);
        reps4 = mediumStrengthReps(exercise4);
        alert(`Your workout for today is:\n\n${exercise1}: 4 sets, ${reps1} reps\n${exercise2}: 4 sets, ${reps2} reps\n${exercise3}: 4 sets, ${reps3} reps\n${exercise4}: 4 sets, ${reps4} reps\n\nIt is suggested to use comfortable weights for this strength-based workout`);
        resetExercises();
    } else if (selectedIntensity === "light" && selectedTraining === "strength") {
        reps1 = lightStrengthReps(exercise1);
        reps2 = lightStrengthReps(exercise2);
        reps3 = lightStrengthReps(exercise3);
        reps4 = lightStrengthReps(exercise4);
        alert(`Your workout for today is:\n\n${exercise1}: 3 sets, ${reps1} reps\n${exercise2}: 3 sets, ${reps2} reps\n${exercise3}: 3 sets, ${reps3} reps\n${exercise4}: 3 sets, ${reps4} reps\n\nIt is suggested to use lighter weights for this strength-based workout`);
        resetExercises();
    } else if (selectedIntensity === "intense" && selectedTraining === "body-weight") {
        alert(`Your workout for today is:\n\n${exercise1}: 4 sets, ${reps1} reps\n${exercise2}: 4 sets, ${reps2} reps\n${exercise3}: 4 sets, ${reps3} reps\n${exercise4}: 4 sets, ${reps4} reps`);
        resetExercises();
    } else if (selectedIntensity === "medium" && selectedTraining === "body-weight") {
        alert(`Your workout for today is:\n\n${exercise1}: 4 sets, ${reps1} reps\n${exercise2}: 4 sets, ${reps2} reps\n${exercise3}: 4 sets, ${reps3} reps\n${exercise4}: 4 sets, ${reps4} reps`);
        resetExercises();
    } else if (selectedIntensity === "light" && selectedTraining === "body-weight") {
        alert(`Your workout for today is:\n\n${exercise1}: 3 sets, ${reps1} reps\n${exercise2}: 3 sets, ${reps2} reps\n${exercise3}: 3 sets, ${reps3} reps\n${exercise4}: 3 sets, ${reps4} reps`);
        resetExercises();
    }
});

// Sets exercise variable back to undefined
function resetExercises() {
    exercise1 = undefined;
    exercise2 = undefined;
    exercise3 = undefined;
    exercise4 = undefined;
}

// Suggested to use to heavier weights to push yourself - Okay to not be able to reach the amount of reps
function intenseStrengthReps(exercise) {
    if (chest8reps.includes(exercise)) {
        return 8;
    } else if (chest20reps.includes(exercise)) {
        return 20;
    } else if (leg8reps.includes(exercise)) {
        return 8;
    } else if (leg20reps.includes(exercise)) {
        return 20;
    } else if (back8reps.includes(exercise)) {
        return 8;
    } else if (back20reps.includes(exercise)) {
        return 20;
    } else if (arms8reps.includes(exercise)) {
        return 8;
    } else if (arms20reps.includes(exercise)) {
        return 20;
    } else {
        return 20;
    }
}

// Suggested to use comfortable weights to allow yourself to reach the amounts reps
function mediumStrengthReps(exercise) {
    if (chest8reps.includes(exercise)) {
        return 8;
    } else if (chest20reps.includes(exercise)) {
        return 15;
    } else if (leg8reps.includes(exercise)) {
        return 8;
    } else if (leg20reps.includes(exercise)) {
        return 15;
    } else if (back8reps.includes(exercise)) {
        return 8;
    } else if (back20reps.includes(exercise)) {
        return 15;
    } else if (arms8reps.includes(exercise)) {
        return 8;
    } else if (arms20reps.includes(exercise)) {
        return 15;
    } else {
        return 15;
    }
}

// Suggested to use light weights and aim for a higher number of reps
function lightStrengthReps(exercise) {
    if (chest8reps.includes(exercise)) {
        return 12;
    } else if (chest20reps.includes(exercise)) {
        return 15;
    } else if (leg8reps.includes(exercise)) {
        return 12;
    } else if (leg20reps.includes(exercise)) {
        return 15;
    } else if (back8reps.includes(exercise)) {
        return 12;
    } else if (back20reps.includes(exercise)) {
        return 15;
    } else if (arms8reps.includes(exercise)) {
        return 12;
    } else if (arms20reps.includes(exercise)) {
        return 15;
    } else {
        return 15;
    }
}

const chestExercises = [
    "Barbell Bench Press",
    "Dumbbell Bench Press",
    "Pushups",
    "Wide Pushups",
    "Close Pushups",
    "Incline Pushups",
    "Decline Pushups",
    "Dumbbell Flyes",
    "Chest Dips",
    "Incline Bench Press",
    "Decline Bench Press",
    "High Cable Flyes",
    "Mid Cable Flyes",
    "Low Cable Flyes",
    "Machine Flyes",
    "Landmine Press"
];

const chest8reps = [
    "Barbell Bench Press",
    "Dumbbell Bench Press",
    "Dumbbell Flyes",
    "Incline Bench Press",
    "Decline Bench Press",
    "High Cable Flyes",
    "Mid Cable Flyes",
    "Low Cable Flyes",
    "Machine Flyes",
    "Landmine Press",
    "Chest Dips"
];

const chest20reps = [
    "Pushups",
    "Wide Pushups",
    "Close Pushups",
    "Incline Pushups",
    "Decline Pushups",
];

const chestBodyWeight = [
    "Pushups",
    "Wide Pushups",
    "Close Pushups",
    "Incline Pushups",
    "Decline Pushups",
    "Chest Dips"
];

const legExercises = [
    "Squats",
    "Leg Extensions",
    "Bulgarian Split Squat",
    "Leg Press",
    "Calf Raises",
    "Front Squats",
    "Leg Curls",
    "Lunges",
    "Straight Leg Deadlifts",
    "Dumbbell Stepup",
    "Romanian Deadlift",
    "Jump Squats",
    "Pause Squats",
    "Barbell Hip Thrust",
    "Glute Bridges",
    "Goblet Squat",
    "Farmers Walk"
];

const leg8reps = [
    "Squats",
    "Leg Extensions",
    "Bulgarian Split Squat",
    "Leg Press",
    "Front Squats",
    "Leg Curls",
    "Lunges",
    "Straight Leg Deadlifts",
    "Dumbbell Stepup",
    "Romanian Deadlift",
    "Pause Squats",
    "Barbell Hip Thrust",
    "Glute Bridges",
    "Goblet Squat",
];

const leg20reps = [
    "Calf Raises",
    "Jump Squats",
    "Farmers Walk"
];

const legBodyWeight = [
    "Squats",
    "Bulgarian Split Squat",
    "Calf Raises",
    "Lunges",
    "Jump Squats",
    "Pause Squats",
    "Glute Bridges",
    "Stair Climb"
];

const armExercises = [
    "Dumbbell Curls",
    "Hammer Curls",
    "Tricep Pulldowns",
    "Barbell Curls",
    "Barbell 21s Curl",
    "Chin Ups",
    "Close Grip Chin Ups",
    "Seated Concentration Curls",
    "Cable Curls",
    "Bench Dips",
    "Cable Face Pulls",
    "Overhead Tricep Extentions",
    "Preacher Curls",
    "Cable Pushdowns",
    "Reverse Lat Pulldowns",
    "Wrist Curls",
    "Reverse Wrist Curls",
    "Tricep Kickbacks",
    "Wrist Rotations"
];

const arms8reps = [
    "Dumbbell Curls",
    "Hammer Curls",
    "Tricep Pulldowns",
    "Barbell Curls",
    "Barbell 21s Curl",
    "Chin Ups",
    "Close Grip Chin Ups",
    "Seated Concentration Curls",
    "Cable Curls",
    "Cable Face Pulls",
    "Overhead Tricep Extentions",
    "Preacher Curls",
    "Cable Pushdowns",
    "Reverse Lat Pulldowns",
    "Wrist Curls",
    "Reverse Wrist Curls",
    "Tricep Kickbacks"
];

const arms20reps = [
    "Bench Dips",
    "Wrist Rotations"
];

const backExercises = [
    "Lat Pulldowns",
    "Close Grip Pulldowns",
    "Wide Grip Pulldowns",
    "Pullups",
    "L Pullups",
    "Pullup Bar Hang",
    "Kettlebell Swings",
    "Barbell Deadlift",
    "Hex Bar Deadlift",
    "Barbell Bent Over Rows",
    "One-Arm Dumbbell Rows",
    "Seated Rows",
    "Landmine Rows",
    "Dumbbell Romanian Deadlifts",
    "Lying Reverse Flyes",
    "Bentover Reverse Flyes",
    "Dumbbell Snatches",
    "Dumbbell Clean and Press",
    "Barbell Hang Clean",
    "Underhand Grip Bentover Rows"
];

const back8reps = [
    "Lat Pulldowns",
    "Close Grip Pulldowns",
    "Wide Grip Pulldowns",
    "Pullups",
    "L Pullups",
    "Barbell Deadlift",
    "Hex Bar Deadlift",
    "Barbell Bent Over Rows",
    "One-Arm Dumbbell Rows",
    "Seated Rows",
    "Landmine Rows",
    "Dumbbell Romanian Deadlifts",
    "Lying Reverse Flyes",
    "Bentover Reverse Flyes",
    "Dumbbell Snatches",
    "Dumbbell Clean and Press",
    "Barbell Hang Clean",
    "Underhand Grip Bentover Rows"
];

const back20reps = [
    "Pullup Bar Hang",
    "Kettlebell Swings"
];

const backBodyWeight = [
    "Pullup Bar Hang",
    "Pullups",
    "L Pullups",
    "Lying Superman",
    "Wide Pushups"
];

const shoulderExercises = [
    "Shoulder Press",
    "Shrugs",
    "Arnold Dumbbell Press",
    "Bentover Lat Raises"
];

const coreExercises = [
    "Sit-Ups",
    "Plank",
    "Bicycle Kicks",
    "Hanging Crunch",
    "Hanging Bar Toe Touches",
    "Incline Bench Leg Raises",
    "Lying Leg Raises",
    "Hanging Leg Raises",
    "Decline Bench Sit-Ups"
];

const stretchExercises = [
    "Toe Touch",
    "Butterfly",
    "Wrist Pulls",
    "Arm Pulls",
    "Seated Spinal Twist",
    "Side Lunges"
];