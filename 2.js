async function runProgram() {
  console.log("Task 1 complete")

  async function fetchData() {  
    return "Fetch the data"
  }

  const data = await fetchData()
  console.log(data)
  
  console.log("Task 2 complete")
}

runProgram()
