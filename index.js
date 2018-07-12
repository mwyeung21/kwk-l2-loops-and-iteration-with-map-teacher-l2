// Code your solution in this file.
//CHALLENGE 1 ----------------------
function lowerCaseStudentNames(studentArray)
{
  // let lowercaseArray = []
  //   for (let i =0; i < studentArray.length; i++)
  //   {
  //     lowercaseArray[i] = studentArray[i].toLowerCase()
  //   }
  //   return lowercaseArray
  return studentArray.map(suppFunction)
}

function suppFunction(str){
  return str.toLowerCase()
}
//console.log(lowerCaseStudentNames(['Adele', 'Beyoncé', 'Lady', 'Madonna', 'Rihanna', 'Taylor']));

//CHALLENGE 2---------------------
//array of names, to array of objects
function nameToAttributes(nameArray)
{
  let tempArray= [];
  let transformedArray = [];
  for (let i=0; i < nameArray.length; i++)
  {
    tempArray = nameArray[i].split(" ");
    // ^['Amy', 'Adams']
    transformedArray.push({'firstName':tempArray[0], 'lastName': tempArray[1]});
    
    //tempObject['firstName'] = tempArray[0] //does not work
    //tempObject['lastName'] = tempArray[1] //does not work
  }
  return transformedArray
}

//console.log(nameToAttributes(['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman']))

//CHALLENGE 3 ------------------------
function attributesToPhrase(arrayStudents)
{
  let tempValuesArray = [];
  let tempKeysArray = [];
  let finalArray = []
  for (let i = 0; i < arrayStudents.length; i++)
  {
    tempKeysArray = Object.keys(arrayStudents[i])
    tempValuesArray = Object.values(arrayStudents[i])
    finalArray[i] = `${tempValuesArray[0]} is from ${tempValuesArray[1]}`
  }
  return finalArray
}

console.log(attributesToPhrase([
  { name: 'Mary',   hometown: 'Allegheny'  },
  { name: 'Joan',   hometown: 'Chicago'    },
  { name: 'Eva',   hometown: 'Hamburg'   }
]))


//works! but need to do enhanced for loop and .map stuff
