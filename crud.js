document.getElementById('formTask').addEventListener('submit', saveTask);


function saveTask(e) {
    
    //con esete console log muestro en la consola el formtask a detalle
    //console.log(formTask);
    //con este console log muestro la informacion que estoy enviando (e)
    //console.log(e);
    //alert('salta un cartel');
    //con este console obtengo el valor que yo ponga en title
    //console.log(document.getElementById('title').value);
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    //console.log('Lo que contiene el titulo es: ', title);
    //console.log('lo que contiene la descripcion es: ', description);
    //haremos un objeto, el objeto task formado por titulo y description
    const task = {
        title,//esto es igual a task: task
        description//esto es igual a description: description
    };

    //convertiremos un objeto a string

    //localStorage.setItem('tasks', JSON.stringify(task));

    //convertimos un string, json, en un objeto
    //console.log(JSON.parse(localStorage.getItem('tasks')));


    if(localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks= JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }; 


    //con esto prevengo el comportamiento por defecto

    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault(); 
}



function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = '';
    for (let i = 0; i < tasks.length; i++){
        let title = tasks[i].title;
        let description = tasks[i].description;
        //solo para verlo en consola       
        console.log(tasks[i]);

        tasksView.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTaks('${title}')">
                    Delete
                </a> 
            </div>
        </div>`
    }
    
  }
  
  getTasks();
  

  function deleteTaks(title) {
    //para ver si me da el titulo de cada tarea por consola
    //console.log(title);

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i=0; i <tasks.length; i++){
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
  }