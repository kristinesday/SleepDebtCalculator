//Create a function named getSleepHours with a single parameter named day.
//The function should accept a day as an argument and return the number of hours you slept that night.
//For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.
//Use an if/else or switch statement to implement this.

const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 10
      break;
    case 'wednesday':
      return 6
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 5
      break;
    case 'saturday':
      return 10
      break;
    case 'sunday':
      return 10
      break;
    default:
      return 'Error!'
  }
}; 

//To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.
//Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.
//The concise body form of a function uses arrow notation and does not include brackets or the return keyword. 
// Implicit return = no return keyword and no curly brackets. Otherwise with return at the top before all days + inside curly brackets 

const getActualSleepHours = () =>
  getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday')

  // can be wrote like this: 
//   const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

// to check if first function works 
// console.log(getSleepHours('monday'));
// to check total hours per week  
//console.log(getActualSleepHours())
console.log('Actual sleep hours:')
console.log(getActualSleepHours())

//To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
//Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.
///You’ll want to multiply by 7 to get the total hours you prefer per week.

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

// Make idealHours a parameter and multiply it by 7.
//   const getIdealSleepHours = idealHours => idealHours * 7;

console.log('Ideal sleep hours:')
console.log(getIdealSleepHours())

// test: console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect!'); 
  } else if (actualSleepHours > idealSleepHours) {
    console.log('That is a bit much! You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more than needed. Go for a run!'); 
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest! You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than needed. Go to bed!');
  } else {
    console.log('Error! Something went wrong! You got ' )
  }
};

// On the last line of the program, start the program by calling the calculateSleepDebt() function.

calculateSleepDebt() 


