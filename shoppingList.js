// shopping-list

const shoppingInput = document.getElementById('shopping-input');
const shoppingBtn = document.getElementById('shopping-btn');
const shoppingList = document.getElementById('shopping-list');
const deleteBtn = document.getElementById('delete-btn');
const completeBtn = document.getElementById('complete-btn');
const form = document.getElementById('form');
const shoppingContainer = document.getElementById('shopping-container')
const small = document.getElementById('small')

shoppingBtn.addEventListener('click', addItem);

// delete and check task
    shoppingList.addEventListener('click', function(e){
    const item = e.target;
    if(item.classList[0] === "delete-btn"){
        const shopping = item.parentElement;
        shopping.classList.add('animation');
        shopping.addEventListener('transitionend',function(){ 
            shopping.remove()
        })
    }   
})

shoppingList.addEventListener('click', function(e){
        const item = e.target;
        if(item.classList[0] === "complete-btn"){
            const shopping = item.parentElement;
            shopping.classList.toggle('checked');
        }    
    })

function addItem(event){
    event.preventDefault();

    // checking if there is some input
    if(shoppingInput.value !== ''){ 
    const shoppingDiv = document.createElement("div");
        small.innerText = '';
    shoppingDiv.classList.add("shopping");
    // adding new ingredient to the list
    const newItem = document.createElement('li');
        newItem.innerText = shoppingInput.value;
        newItem.classList.add('shopping-item');
        shoppingDiv.appendChild(newItem);
    
    
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class= "fas fa-check fa"></i>';
    completeBtn.classList.add("complete-btn");
    shoppingDiv.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class= "fas fa-trash fa"></i>';
    deleteBtn.classList.add("delete-btn");
    shoppingDiv.appendChild(deleteBtn);

    shoppingList.appendChild(shoppingDiv);
    // clear input value
    shoppingInput.value = '';
 }else{
     small.innerText='come on!! type something';
 }
}



