const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let answer = array.find(function(e) {
    return e.result === "W"
  })
  if (answer === undefined) {
    return undefined
  } else {
    return answer.year
  }
}