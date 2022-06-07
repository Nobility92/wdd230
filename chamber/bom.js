const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const mylist = input.value;
    input.value = " "; 

    const btnlist = document.createElement('li');
    const myspan = document.createElement('span');
    const btndelete = document.createElement('button');

    btnlist.appendChild(myspan);
    myspan.textContent = mylist;
    btnlist.appendChild(btndelete);
    btndelete.textContent = 'X';
    btndelete.style.color = 'red';
    btndelete.style.fontSize = '20px';
    list.appendChild(btnlist);

    btndelete.addEventListener('click', () => {
        list.removeChild(btnlist);
    });
        input.focus();
});