const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const mylist = input.value;
    input.value = " "; 

    const btnlist = document.querySelector('li');
    const myspan = document.querySelector('span');
    const btndelete = document.querySelector('button');

    btnlist.appendChild(myspan);
    btnlist.appendChild(btndelete);
    myspan.textContent = mylist;
    btndelete.textContent = 'X';
    list.appendChild(btnlist);

    btndelete.addEventListener('click', ()=>{
        list.removeChild(btnlist);
    });
        input.focus();
});