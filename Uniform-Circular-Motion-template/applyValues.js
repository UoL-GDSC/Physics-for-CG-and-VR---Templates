function applyValues() { //function that checks validity of entered values and calculates missing values if possible
    
    // INSTRUCTIONS BELOW *********************************************
    /*
    STEP 1: 
    Check whether the values of variables submitted by the user are in numerical form
    angleSwept (angle swept, corresponding to displacement)
    time (time) 
    angularVelocity (angular velocity)
    If not, display a descriptive error message with alert() and reset the input values.
    *Hint: Use isNaN().

    STEP 2: 
    Ensure that at least TWO out of the three (Angle swept, Velocity, or Angular velocity) input fields have been filled so that the remaining third value can be calculated.

    Possible scenarios:
    No values were entered
    Only one value was entered
    Using conditional statements, inform the user of errors by displaying a descriptive message with alert() and reset the input fields.

    STEP 3:
    Recall the formulas.
    With the help of conditional statements, calculate the remaining third value. 
    Given the values of: 
    angle swept and time, calculate angular velocity
    angle swept and angular velocity, calculate time
    time and angular velocity, calculate angle swept.

    STEP 4:
    If all three values were entered by the user, does the combination adhere to the formulas?
    Similarly,  
    Display error message 
    Reset the input values 

    */

    
    rectX = 0; //initializing x coordinate to be 0
    rectY = 0; //initializing y coordinate to be 0
    speed = parseFloat(angularVelocity.value()).toFixed(2); //assigning value of angular velocity to speed(variable that controls the simulation)
    timer = 0; //initializing time to be equal to 0
    angle = 0; //initializing angle to be equal to 0 (returning it to beginning)
    counter = 0; //initializing counter (number of cycles) to be equal to 0
    loop(); // continuing the simulation after new values have been applied
}