function applyValues() {
    
    // INSTRUCTIONS BELOW **********************************
    /*
    STEP 1: 
    Check whether the values of variables submitted by the user are in numerical form
        i. period
        ii. frequency)
    iii. angular velocity
    If not, display a descriptive error message with alert() and reset the input values.
    *Hint: Use isNaN().

    STEP 2: 
    Ensure that at least ONE out of the three (Period, Frequency, or Angular Velocity) input fields have been filled so that the remaining third value can be calculated.

    Using an if-statement, inform the user of errors by displaying a descriptive message with alert() and reset the input fields.
    *Hint: Empty string 

    STEP 3:
    Recall the formulas. 
    Calculate the second and third values.
    Possible scenarios:
    Value for period was entered, while that of frequency and angular velocity were empty
    Value for frequency was entered, while that of period and angular velocity were empty
    Value for angular velocity was entered, while that of period and frequency were empty
    
    Example: Given the value of period, calculate frequency and angular velocity

    STEP 4: 
    If two input fields were filled, ensure that the combination of values is valid. 
    Possible scenarios:
    Values for period and frequency were entered, while that of angular velocity was empty
    Values for period and angular velocity were entered, while that of frequency was empty
    Values for frequency and angular velocity were entered, while that of was empty
    For each of these scenarios, 
    Using an if-statement, identify submitted inputs that were filled and empty 
    Write a nested conditional statement to identify whether the combinations of values are possible to form a valid calculation.
    If valid, calculate the value of the remaining variable
    If invalid, inform the user of errors by displaying a descriptive message with alert(), and reset the input fields.
    the remaining value (if any).
    On the other hand, invalid combinations should execute the following: 
    Display error message 
    Reset the input values 

    Example: Validating the combination of values for period and frequency

    STEP 5:
    If all THREE values were entered by the user, does the combination adhere to the formulas?
    Similarly,  
    Display error message 
    Reset the input values 

    */
    
    
    rectX = 0; //initializing x coordinate to be 0
    
    frequencyIni = parseFloat(frequency.value()); //setting frequency (used to control simulation/animation) to be equal to frequency.value()
    timer = 0; //initializing time to be equal to 0
    angle = 0; //initializing angle to be equal to 0 (returning it to beginning)
    counter = 0; //initializing counter (number of cycles) to be equal to 0
}