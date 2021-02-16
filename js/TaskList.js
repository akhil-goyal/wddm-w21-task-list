import TaskItem from './TaskItem.js'

/*
const loadTaskView = ({id, complete, task}) => {
  return `<task-item data-id="${id}" data-complete="${complete}" data-task="${task}"></task-item>`
}

// A function that will build an entire list based on an Array of data
export const renderList = (taskAr) => {
  //document.getElementById(`tasks`).innerHTML = taskAr.map(loadTaskView).join('\n')
}
 */

export default class TaskList extends HTMLElement {

  list = null

  constructor(todoList) {
    super()

    this.root = this.attachShadow({ mode: `open` })

    const eleStyle = document.createElement(`style`)
    const txtStyle = document.createTextNode(`
      ul {
        padding-left: 0;
        list-style: none;
      }`)
    eleStyle.appendChild(txtStyle)
    this.root.appendChild(eleStyle)

    const userForm = document.createElement('form');

    userForm.setAttribute('name', 'newTask');

    const userInput = document.createElement('input');

    userInput.setAttribute('type', 'text');
    userInput.setAttribute('name', 'taskname');

    const buttonSubmit = document.createElement('button');
    buttonSubmit.setAttribute('type', 'submit');
    buttonSubmit.innerHTML = 'Add';

    buttonSubmit.addEventListener('click', event => {
      this.addTaskTop(userInput.value);
      event.preventDefault();
    })

    userForm.appendChild(userInput);
    userForm.appendChild(buttonSubmit);


    // Build an empty list
    this.list = document.createElement(`ul`)

    /*    // Add all of the <task-item> elements to the empty list
        const loadTaskView = ({id, complete, task}) => {
          return `<task-item data-id="${id}" data-complete="${complete}" data-task="${task}"></task-item>`
        }
        eleList.innerHTML = todoList.map(loadTaskView).join(`\n`)
    */
    todoList.forEach((item) => {
      const aTask = new TaskItem(item)
      aTask.addEventListener('taskChanged', event => { console.log('Task Complete?', aTask.complete) })
      this.list.appendChild(aTask)
    })

    this.root.appendChild(userForm);

    this.root.appendChild(this.list)

  }

  addNewTask(name) {
    // Figure out what the next available id is
    const aTask = new TaskItem({ id: 4, task: name, complete: false })
    aTask.addEventListener('taskChanged', event => { console.log('Task Complete?', aTask.complete) })
    this.list.appendChild(aTask)
  }

  addTaskTop(name) {
    const aTask = new TaskItem({ id: 4, task: name, complete: false })
    aTask.addEventListener('taskChanged', event => { console.log('Task Complete?', aTask.complete) })
    this.list.insertBefore(aTask, this.list.childNodes[0]);
  }

}

window.customElements.define(`task-list`, TaskList)
