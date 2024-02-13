document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('add').addEventListener('click', main);
   
    function main(){
        let array = [];
        let temp = 'A0';
        let task = document.getElementById('thetask').value;
        if (!task){
            exit();
            return;
        }
        document.getElementById('thetask').style.color = 'black';
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
            }
            else{
                label.style.textDecoration = 'none';
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
    }

    function UniqueId(name, array){
        let x;
        do {
            x = Math.random() * 100;
        } while (array.includes(name + x));
        array.push(name + x);
        return name + x;
    }
    function exit(){
        document.getElementById('thetask').placeholder = "Enter Something 💀";
        document.getElementById('thetask').style.color = 'red'; 
        document.getElementById('thetask').style.border = '1px solid black';   
    }
});