function runProgram() {
  console.log("Task 1 complete")

  async function fetchData(success) {
    if (success) {
      return "Fetch the data"
    } else {
      throw new Error("Something went wrong while fetching the data");
    }
  }

  // Execution 1
  fetchData(true)
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error.message)
    })

  // Execution 2
  fetchData(false)
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error.message)
    })

  console.log("Task 2 complete")
}

runProgram()
