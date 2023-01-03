var selectedExercise;
var selectedIntensity;
var selectedTraining;
var exercise1;
var sets1;
var reps1;
var exercise2;
var sets2;
var reps2;
var exercise3;
var sets3;
var reps3;
var exercise4;
var sets4;
var reps4;

// Assigns the selected values of the dropdowns to their appropriate variables
$( document ).ready(function() {
    $("#exercise-dropdown").change(() => {
        selectedExercise = $(this).find(":selected").val();
    });

    $("#intensity-dropdown").change(() => {
        selectedIntensity = $(this).find(":selected").val();
    });

    $("#training-dropdown").change(() => {
        selectedTraining = $(this).find(":selected").val();
    });
});

// Returns a random element of the specified array
function randomExercise(array) {
    return array[Math.floor(Math.random() * (array.length))];
}

// Generates 4 random, unique exercises from the specified array
function generateExercises(type) {
    exercise1 = randomExercise(type);
    while (exercise2 === null || exercise2 === exercise1) {
        exercise2 = randomExercise(type);
    }
    while (exercise3 === null || exercise3 === exercise1 || exercise3 === exercise2) {
        exercise3 = randomExercise(type);
    }
    while (exercise4 === null || exercise4 === exercise1 || exercise4 === exercise2 || exercise4 === exercise3) {
        exercise4 = randomExercise(type);
    }
}

// Code executed when Generate Workout button is click. Produces a random 4 exercise workout and displays it in an alert
$("#generateButton").click(() => {
    console.log(selectedExercise);
    console.log(selectedIntensity);
    console.log(selectedTraining);
    if (selectedExercise === undefined || selectedIntensity === undefined || selectedTraining === undefined) {
        return alert("Must choose one of each");
    } else {
        console.log("You chose a %s, %s, %s workout", selectedIntensity, selectedTraining, selectedExercise);
    }

    if (selectedExercise === "chest") {
        generateExercises(chestExercises);
    } else if (selectedExercise === "legs") {
        generateExercise(legExercises);
    } else if (selectedExercise === "back") {
        generateExercise(backExercises);
    } else if (selectedExercise === "arms") {
        generateExercise(armExercises);
    } else if (selectedExercise === "shoulders") {
        generateExercise(shoulderExercises);
    } else if (selectedExercise === "core") {
        generateExercise(coreExercises);
    } else if (selectedExercise === "stretch") {
        generateExercise(stretchExercises);
    }

    if (selectedIntensity === "intense" && selectedTraining === "strength") {
        reps1 = intenseStrengthReps(exercise1);
        reps2 = intenseStrengthReps(exercise2);
        reps3 = intenseStrengthReps(exercise3);
        reps4 = intenseStrengthReps(exercise4);
        alert(`Your workout for today is:\n\n${exercise1}: 4 sets, ${reps1} reps\n${exercise2}: 4 sets, ${reps2} reps\n${exercise3}: 4 sets, ${reps3} reps\n${exercise4}: 4 sets, ${reps4} reps\n\nIt is suggested to use heavier weights for this strength-based workout`);
    } else if (selectedIntensity === "medium" && selectedTraining === "strength") {
        reps1 = mediumStrengthReps(exercise1);
        reps2 = mediumStrengthReps(exercise2);
        reps3 = mediumStrengthReps(exercise3);
        reps4 = mediumStrengthReps(exercise4);
        alert(`Your workout for today is:\n\n${exercise1}: 4 sets, ${reps1} reps\n${exercise2}: 4 sets, ${reps2} reps\n${exercise3}: 4 sets, ${reps3} reps\n${exercise4}: 4 sets, ${reps4} reps\n\nIt is suggested to use comfortable weights for this strength-based workout`);
    } else if (selectedIntensity === "light" && selectedTraining === "strength") {
        reps1 = lightStrengthReps(exercise1);
        reps2 = lightStrengthReps(exercise2);
        reps3 = lightStrengthReps(exercise3);
        reps4 = lightStrengthReps(exercise4);
        alert(`Your workout for today is:\n\n${exercise1}: 4 sets, ${reps1} reps\n${exercise2}: 4 sets, ${reps2} reps\n${exercise3}: 4 sets, ${reps3} reps\n${exercise4}: 4 sets, ${reps4} reps\n\nIt is suggested to use lighter weights for this strength-based workout`);
    }
});

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
    "Bar Hang",
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
    "Bar Hang",
    "Kettlebell Swings"
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