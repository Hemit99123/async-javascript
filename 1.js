function runProgram() {
  console.log("Task 1 complete")

  async function fetchData() {  
    return "Fetch the data"
  }

  fetchData()
    .then((data) => {
      console.log(data)
    })

  console.log("Task 2 complete")
}

runProgram()
