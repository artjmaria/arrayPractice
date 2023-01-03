
const exampleArray = [2, 5, 6, 7, 9]

const addOneWithSum = (ourArray) => {
  let newList = []
  let sum = 0
  for (let i = 0; i < ourArray.length; i++) {
    sum += (ourArray[i] + 1)
    newList.push(ourArray[i] + 1)
  }
  return newList + ' ' + sum
}

addOneWithSum(exampleArray)



// / More details:
// the for() loop states:
  // let i = 0; - set i to 0, (i stands for iterator)
  // i < ourArray.length; - and while i is less than the length of ourArray keep doing what is inside the code block
  // i++  - and each time you loop through ourArray once add 1 to the value of i so that we keep iterating through all of the numbers in the list.
// ourArray[i] + 1 - inside the {} of the for() loop we add 1 to each item in ourArray

// let newList = []  -  creates a place we can hold the new values of the list
// newList.push(ourArray[i] + 1)  -   the .push() method pushes the new values into the newList array/list
// return newList  -  and then we returned the newList as the output of this program

// let sum = 0  -  Now we create a place to hold the sum of the new numbers: sum
// sum += (ourArray[i] + 1)  -  and inside our for() loop we continually add to the value of sum
// then we return sum as part of our output.
// in the return we added a space, ' ' , between newList and sum so that the return would be easier to read.