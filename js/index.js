import {getJsonData, addNewTask} from './fetch.js'
import TaskList from './TaskList.js'
import NewTask from './NewTask.js'


// ONLY when the interface is loaded, do we go and look for data and render
window.addEventListener(`load`, (event) => {

  // Go get some data! (Assume some "await" time)
  const todoList = getJsonData(`http://whatever.com/tasks`)
  const $app = document.getElementById(`app`)



  // Pass the array of data, build the UI
  const theListElement = new TaskList(todoList)
  

  
  
  // THe "<new-task>" form
  const theNewTaskForm = new NewTask()
  $app.appendChild(theNewTaskForm)
  theNewTaskForm.addEventListener(`new`, (event) => {
    console.log(`New task has been added!!!`, event.detail)
    // Now what?
    // - Update the database
    // - Get a new listing of tasks
    // - Refresh the UI to match the tasks
    //theListElement.addNewTask(event.detail)
    let updatedTaskList = addNewTask(event.detail)
    console.table(updatedTaskList)

    // "Render" the new list
    theListElement.render(updatedTaskList)

  })


  $app.appendChild(theListElement)

  
})



// Before Tuesday:
// - Turn the <form> into a Web Component that when the form is submit, a new task is added
// - Practice DOM methods, but adding the item to the top of the list instead of the bottom 
// - Style the form, make it look pretty





/*
// LAB:
Modify the way that a TaskList adds <task-item> elements, using the `new TaskItem()` style syntax to pass an task object (or the properties separately) to the class definition.
Class will resume at 2:20
*/





// Before Thurs:
// - Turn tasks.js into TaskList.js (a Web Component)
// - Write an "interface" to update the todoList
// - Add a `change` listener to the TaskItem
// - Call the new "update" interface when a TaskItem has updated
// - Update the Array of data

// Think about:
// - Build a TaskItem using the class name, instead of the HTML item
// - Have the TaskList know when one of it's TaskItems has changed









/*
- Order by priority and completeness
Reminder:
- Compare then() to async/await
- Destructuring
*/