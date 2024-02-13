document.addEventListener('DOMContentLoaded', ()=>{
    const addlist = document.getElementById('addtask')
    addlist.addEventListener('click',()=>{
        
        const task = document.getElementById('task').value;

        const label = document.createElement('label');
        label.textContent = task;
        label.setAttribute('for', task);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = task;
        const del = document.createElement('img');
        del.setAttribute('src', 'img/bin.png')
        del.setAttribute('alt','a small image of a bin')
        del.id = task;
        del.classList.add('delete_button');

        del.addEventListener('click',()=>{
            del.parentElement.remove();
        })

        const div = document.createElement('div');
        div.classList.add('grid');
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(del);

        document.getElementById('tasks').appendChild(div);

        del.addEventListener('mouseover', ()=>{
            del.style.width = '23px';
        });
        del.addEventListener('mouseout',()=>{
            del.style.width = '23px';
        })
    });
});