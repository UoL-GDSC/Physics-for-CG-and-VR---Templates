function applyValues() { //function that checks validity of entered values and calculates missing values if possible
    
    // INSTRUCTIONS BELOW ***********************************
    /*
    STEP 1: 
    Check whether the values submitted by the user are in numerical form. If not, display a descriptive error message with alert() and reset the input values.
    *Hint: Use isNaN().

    STEP 2: 
    After ensuring that at least THREE out of the five input fields have been filled:
    Initial velocity
    Final velocity 
    Displacement 
    Time 
    Acceleration,
    calculate the remaining value(s) according to the given “SUVAT” formulas.
    Example: 
    Values for displacement, time, and initial velocity were submitted. Hence, calculate acceleration and final velocity using an appropriate formula. 

    STEP 3:
    Recall the given formulas.
    With all four values, check whether the user has entered a possible/valid combination of values based on the "SUVAT" formulas. If not, display an error message with alert() to inform the user and reset the input values.
    Example: Values of initial velocity, acceleration and time are not valid to compute the final velocity. 

    */
    
    rectX = 0;  //restarting it to 0
    rectY = 0;  //restarting it to 0
    speed = parseFloat(acceleration.value())/50; //assigning value of velocity to speed (variable that controls the simulation)
    timer = 0; //resetting timer to be equal to 0[s]
    distance = 0; //resetting distance to be equal to 0[m]
    s = 0; //resetting variable s(controls drawing from left to right) to be equal to 0[m]
    counter = 0; //resetting counter (number of passes) to be equal to 0
    loop(); // continuing the simulation after new values have been applied
}