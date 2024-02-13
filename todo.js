document.addEventListener('DOMContentLoaded', ()=>{
    // addlist is the button to be clicked to add tasks
    const addlist = document.getElementById('addtask')

    addlist.addEventListener('click',()=>{
        // Getting the value of the task
        const task = document.getElementById('task').value;


        // Creating a checkbox for task completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = task;

        // Creating a label which has the task as content and is connected to the checkbox
        const label = document.createElement('label');
        label.textContent = task;
        label.setAttribute('for', task);

        //creating a delete button to delete task
        const del = document.createElement('img');
        del.setAttribute('src', 'img/bin.png')
        del.setAttribute('alt','a small image of a bin')
        del.id = task;
        del.classList.add('delete_button');

        // creating a div to hold the label, checkbox and del which can be appended to the parent div
        const div = document.createElement('div');
        div.classList.add('grid');
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(del);
        document.getElementById('tasks').appendChild(div);

        // Confirming that the user want's to delete the task
        del.addEventListener('click',()=>{
            // Confirmation is a diplay = 'none' block that can be used
            document.getElementById("confirmation").style.display = 'block';

            document.getElementById('yes').addEventListener('click',()=> {
                div.parentNode.removeChild(div);
                document.getElementById("confirmation").style.display = 'none';
            });

            document.getElementById('no').addEventListener('click',()=>{
                document.getElementById("confirmation").style.display = 'none';
            });
        })

    });
});