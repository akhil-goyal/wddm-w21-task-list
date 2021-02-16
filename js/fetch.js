const todoList = [
  {
    "id": 1234,
    "task": "Complete this example",
    "complete": false
  }, {
    "id": 1234,
    "task": "Order groceries",
    "complete": true
  }, {
    "id": 3,
    "task": "Learn about Web Components",
    "complete": false
  }
]

export const getJsonData = (url) => {
  // Pretend we fetched this data
  // fetch(url, blah blah blah)

  return todoList
}

export const addNewTask = (taskName) => {
  // Pretend we are updating the database
  // POST request
  todoList.push({
    "id": todoList.length + 1,
    "task": taskName,
    "complete": false
  })

  // Pretend this came from the database after a successful update
  return todoList
}