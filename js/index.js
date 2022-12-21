const chestExercises = [
    "Barbell Bench Press",
    "Dumbbell Bench Press",
    "Pushups",
    "Wide Pushups",
    "Close Pushup",
    "Incline Pushup",
    "Decline Pushup",
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

const shoulderExercises = [
    "Shoulder Press", 
    "Shrugs",
    "Arnold Dumbbell Press",
    "Bentover Lat Raises"
];

const stretchExercises = [
    "Toe Touch",
    "Butterfly",
    "Wrist Pulls",
    "Arm Pulls",
    "Seated Spinal Twist",
    "Side Lunges"
];

var selectedExercise;
var selectedIntensity;
var selectedTraining; 

function exerciseFunction(value) {
    selectedExercise = value;
}

function intensityFunction(value) {
    selectedIntensity = value;
}

function trainingFunction(value) {
    selectedTraining = value;
}

function generateWorkout() {
    if (selectedExercise === undefined || selectedIntensity === undefined || selectedTraining === undefined) {
        return alert("Must choose one of each");
    } else {
        console.log("You chose a %s, %s, %s workout", selectedIntensity, selectedTraining, selectedExercise);
    }
}