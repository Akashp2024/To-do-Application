let todolist=[
    { 
        item:'Buy Milk', 
        duedate:'2022-03-02'
    },
    {
        item:'Go to college', 
        duedate:'2024-09-28'
    }
];
displayitems();
function addtodo() {
    let inputelement = document.querySelector('#input_todo');
    let dateelement = document.querySelector('#date_todo');
    let todoitem = inputelement.value;
    let tododate = dateelement.value;
    todolist.push({item: todoitem, duedate: tododate});
    // console.log(todolist);
    inputelement.value = '';
    dateelement.value = ''; 
    saveitems();
    displayitems();  
    
}

function displayitems() {
    let containerelement = document.querySelector('#todo_container');
    let newhtml='';

    for(let i=0; i<todolist.length; i++)
    {
        let todoitem = todolist[i].item;
        let tododate = todolist[i].duedate;
        newhtml = newhtml + `
        <span>${todoitem}</span>
        <span>${tododate}</span>
        <button id='deletebtn'onclick=' todolist.splice(${i}, 1);
        displayitems();'>Delete</button>`;        
    }
    containerelement.innerHTML = newhtml;
}


function saveitems() {
    localStorage.setItem('tasklist',JSON.stringify(todolist));
    
}