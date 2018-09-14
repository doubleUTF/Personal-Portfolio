/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    if (!input) return 'invalid number and unit'
    let numreg=/^[\d./]+/g;
    var result=input.match(numreg)
    // No number provided
    if (!result) return 1;

    // Check for multiple fractions
    let fractionTest= result[0].match(/\//g);
    if (!fractionTest){
      return result[0];
    } else if (fractionTest.length>1) return 'invalid number'
    else {
      let numSplit=result[0].split('/');
      return numSplit.reduce((x,y)=>{
        return (Number(x)/Number(y)).toFixed(5)
      })
    }
  };

  this.getUnit = function(input) {
    if (!input) return 'invalid number and unit'
    const allowedUnits=['gal','l','mi','km','lbs','kg','L'];
    var result;
    let unitReg=/[a-zA-Z]+$/
    result=input.match(unitReg)
    if (!result) return 'invalid unit'
    let unit=result[0].toLowerCase();
    if (allowedUnits.indexOf(unit)===-1){
      return 'invalid unit'
    }
    return unit;
  };

  this.getReturnUnit = function(initUnit) {

    const unitMappings={
      'gal':'l',
      'l':'gal',
      'lbs':'kg',
      'kg':'lbs',
      'mi':'km',
      'km':'mi'
    }
    return unitMappings[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    const spellMappings={
      'gal':'gallons',
      'l':'liters',
      'lbs':'pounds',
      'kg':'kilograms',
      'mi':'miles',
      'km':'kilometers'
    }
    return spellMappings[unit];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (this.getUnit(initUnit)){
      case 'gal':
        result=initNum*galToL;
        break;
      case 'l':
        result=initNum/galToL;
        break;
      case 'lbs':
        result=initNum*lbsToKg;
        break;
      case 'kg':
        result=initNum/lbsToKg;
        break;
      case 'mi':
        result=initNum*miToKm;
        break;
      case 'km':
        result=initNum/miToKm;
        break;
    }

    return Number(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result=`${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result;
  };

}

module.exports = ConvertHandler;
