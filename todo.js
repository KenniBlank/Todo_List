document.addEventListener('DOMContentLoaded',()=>{
    reload_function();
    document.getElementById('thetask').addEventListener('click', default_task);
    document.getElementById('add').addEventListener('click', main);
    window.addEventListener('keydown', function (e){
            if (e.key === "Enter"){
                this.document.getElementById('add').click();
            }
    });

    function main(){
        let array = [];
        let task = document.getElementById('thetask').value;
        if (!task){
            exit();
            return;
        }
        let unique_id = UniqueId(task, array);

        localStorage.setItem(unique_id, task);

        display(unique_id, task);
    }

    function UniqueId(name, array){
        let x;
        do {
            x = Math.random() * 100;
        } while (array.includes(name + x));
        array.push(name + x);
        return name + x;
    }
    function default_task(){
        let box = document.getElementById('thetask');
        box.style.border = "1px solid black";
        box.placeholder = 'Task...';
    }
    function exit(){
        document.getElementById('thetask').placeholder = "Enter Something !!💀";
        document.getElementById('thetask').style.border = '0.1rem dotted';
    }

    function reload_function(){
        for(let i=0; i<localStorage.length; i++)
        {
            let unique_id = localStorage.key(i);
            let task = localStorage.getItem(unique_id);
            display(unique_id, task);
        }
    }

    function display(unique_id, task){
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = unique_id;

        let label = document.createElement('label');
        label.setAttribute('for', unique_id);
        label.textContent = task;

        let delete_ul = document.createElement('img');
        delete_ul.setAttribute('src',"img/bin.png");
        delete_ul.setAttribute('class','del_image');

        delete_ul.addEventListener('click',()=>{
            let listItem = delete_ul.parentElement.parentElement;
            listItem.parentElement.removeChild(listItem);
            localStorage.removeItem(unique_id);
        })

        checkbox.addEventListener('click', ()=>{
            if (checkbox.checked == true){
                label.style.textDecoration = 'line-through';
                div.style.background = "rgb(249, 74, 74)";
            }
            else{
                label.style.textDecoration = 'none';
                div.style.background = 'none';
            }
        });

        let div = document.createElement('div');
        div.classList.add('task_s')
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(delete_ul);

        let list = document.createElement('li');
        list.appendChild(div);

        let ul = document.getElementById('tasks');
        ul.appendChild(list);
        document.getElementById('thetask').value = '';
    }
});