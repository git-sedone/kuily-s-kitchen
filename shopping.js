const mobileList = document.getElementById('mobile-shopping-list')
const addBtn = document.getElementById('mobile-shopping-button')
const mobileInput = document.getElementById('mobile-shopping-input')


addBtn.addEventListener('click', function(e){
    e.preventDefault()
    console.log('click');
    if(mobileInput.value !== ''){
        const shoppingDiv = document.createElement('div')
        small.innerText = '';
        shoppingDiv.classList.add('shopping')
        const newItem= document.createElement('li')
        newItem.innerText = mobileInput.value
        console.log(newItem);
        newItem.classList.add('shopping-item')
        shoppingDiv.appendChild(newItem)
        
        const buyBtn = document.createElement('button')
        buyBtn.innerHTML = '<i class= "fas fa-check fa"></i>'
        buyBtn.classList.add('buy-btn')
        newItem.appendChild(buyBtn)
        
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class= "fas fa-trash fa"></i>';
        deleteBtn.classList.add("delete-btn");
        newItem.appendChild(deleteBtn);
        
        mobileList.appendChild(shoppingDiv)
        
        deleteBtn.addEventListener('click', function(e){
            console.log('click')
            newItem.style.display='none'
            
        })
        buyBtn.addEventListener('click', function(e){
            newItem.style.textDecoration='line-through'
        })
    }else{
        small.innerText='come on!! type something';
        small.style.color='red'
    }
    mobileInput.value = ''
    
})
