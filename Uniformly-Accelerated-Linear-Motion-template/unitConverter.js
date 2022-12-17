//function that converts values from m/s to other units
function unitConverter() {
  var item = sel.value();
  
  textSize(15);
  if (item == 'km/h'){ //converting to kilometers per hour
      iniVel.value(parseFloat((initialVelocity.value())*3.6).toFixed(2));
      finVel.value(parseFloat((finalVelocity.value())*3.6).toFixed(2));
      displ.value(parseFloat((displacement.value())/1000).toFixed(2));
      tim.value(parseFloat((time.value())/3600).toFixed(2));
      acc.value(parseFloat((acceleration.value())*12960).toFixed(2));
  }
  
  //INSTRUCTIONS BELOW ***************************************
  /* 
  STEP 4: 
    Using conditional statements, convert values of the variables: 
        i. iniVel (initial velocity)
        ii. finVel (final velocity)
    iii. displ (displacement)
    iv. tim (time)
    v. acc (acceleration)
    to appropriate units such as:
    km/h (kilometers per hour) 
    mph (miles per hour)
    ft/s (feet per second)
    knot (nautical miles per hour)
    m/s (meters per second); default option 
    [The conversion for km/h (kilometres per hour) has been completed for you.]

  */
}
