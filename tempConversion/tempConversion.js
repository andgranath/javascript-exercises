const ftoc = function(f) {
  celsius = (f -32) * (5/9);

  if (Number.isInteger(celsius)) {
    
    return celsius

  }
  return parseFloat((Math.round(celsius * 10)/10).toFixed(1))

}

const ctof = function(c) {

  fahrenheit = c * (9/5) + 32;
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit
  }
  else {
    return parseFloat((Math.round(fahrenheit * 10) / 10).toFixed(1))
  }
  

}

module.exports = {
  ftoc,
  ctof
}
