function applyValues() { //function that checks validity of entered values and calculates missing values if possible
    
    // INSTRUCTIONS BELOW *******************************************
    /* 
    STEP 1: 
    Check whether the values of variables submitted by the user are in numerical form
        i. angle swept
        ii. time
    iii. initial velocity
    iv. final velocity
    v. angular acceleration
    If not, display a descriptive error message with alert() and reset the input values.
    *Hint: Use isNaN().

    STEP 2: 
    Ensure that at least THREE out of the five input fields were entered so that the remaining values can be calculated.

    Possible scenarios to raise an error:
    No values were entered
    Only one value was entered (e.g. user only submitted a value for angle swept) 
    Only two values were entered (e.g. user only submitted values for angle swept and time) 
    Using conditional statements, inform the user of errors by displaying a descriptive message with alert() and reset the input fields.
    
    STEP 3:
    Recall the formulas.
    With the help of conditional statements, calculate the remaining values. 

    Given the values of: 
    Three variables, calculate the remaining two
    Four variables, calculate the remaining one

    Example 1: Given angle swept, time, and initial angular velocity, calculate the final angular velocity and angular acceleration.

    Using the second given formula, we can find angular acceleration by deriving 
    Using the first given formula we can find angular velocity by applying the values of the angular acceleration found above, along with initial angular velocity and time entered by the user.

    *There are 15 possible cases for these two scenarios. 

    */ 

    
    rectX = 0; //initializing x coordinate to be 0
    rectY = 0; //initializing y coordinate to be 0
    speed = 0; //initializing speed to be equal to 0 (variable that controls the simulation)
    timer = 0; //initializing time to be equal to 0
    angle = 0; //initializing angle to be equal to 0 (returning it to beginning)
    counter = 0; //initializing counter (number of cycles) to be equal to 0
    loop(); // continuing the simulation after new values have been applied
}