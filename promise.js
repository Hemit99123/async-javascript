// Build a custom Promise 
// Use this syntax if you want manual control over resolve and reject 

function callTask(status) {
  return new Promise((resolve, reject) => {
    if (status === "ready") {
      resolve("Ready")
    } else if (status === "not-ready") {
      resolve("Not ready")
    } else {
      reject("Invalid input")
    }
  });
}

// Execution 1
callTask("ready")
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

// Execution 2
callTask("not-ready")
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

// Execution 3
callTask("blahblahblah")
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
