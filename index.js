// code your solution here
function saturdayFun(acivity="roller-skate"){
    
    return `This Saturday, I want to ${acivity}!`;
}
function mondayWork(acivity="go to the office") {


     return `This Monday, I will ${acivity}.`;
}
let wrapAdjective =function (style="*") {

  return function (adjective ="special"){
          return `You are ${style}${adjective}${style}!`
  }
}