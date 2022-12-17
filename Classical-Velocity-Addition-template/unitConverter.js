//function that converts values from m/s to other units
function unitConverter() {
  var item = sel.value();
  
  textSize(15);
  if (item == 'km/h'){ //converting to kilometers per hour based on 1000/3600 = 3.6
      vel.value(parseFloat((velocity.value())*3.6).toFixed(2));
      riv.value(parseFloat((riverVelocity.value())*3.6).toFixed(2));
      res.value(parseFloat((resultVelocity.value())*3.6).toFixed(2));
  }
  
// INSTRUCTIONS BELOW **********************************************************************
/*
  STEP 7: 
    Using conditional statements, convert values of the variables: 
        i. vel (initial velocity)
        ii. riv (velocity of river)
        iii. res (resulting velocity)
    to appropriate units such as:
    km/h (kilometers per hour) 
    mph (miles per hour)
    ft/s (feet per second)
    knot (nautical miles per hour)
    m/s (meters per second); default option 
    [The conversion for km/h (kilometers per hour) has been completed for you.]
*/
    
}
