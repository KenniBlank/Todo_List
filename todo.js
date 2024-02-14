document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('add').addEventListener('click', main);
    window.addEventListener('keydown', function (e){
            if (e.key === "Enter"){
                this.document.getElementById('add').click();
            }
    })
    document.getElementById('thetask').addEventListener('click', default_task);
    function main(){
        let array = [];
        let temp = 'A0';
        let task = document.getElementById('thetask').value;
        if (!task){
            exit();
            return;
        }
        temp = UniqueId(task, array);
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = temp;

        let label = document.createElement('label');
        label.setAttribute('for', temp);
        label.textContent = task;

        let delete_ul = document.createElement('img');
        delete_ul.setAttribute('src',"img/bin.png");
        delete_ul.setAttribute('class','del_image');

        delete_ul.addEventListener('click',()=>{
            let listItem = delete_ul.parentElement.parentElement;
            listItem.parentElement.removeChild(listItem);
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
});