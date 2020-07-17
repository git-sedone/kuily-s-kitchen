
// code for video

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const bar = document.getElementById('bar');
const video = document.getElementById('video');
const stamp = document.getElementById('stamp');


video.addEventListener('click', function toggleVideo(){
    if(video.paused){
        video.play();
    }else{
        
        video.pause();
    }
    
});
video.addEventListener('pause', function updateBtn(){
    if(video.paused){
        startBtn.innerHTML= '<i class="fa fa-play fa-2x"></i>'
    }else{
        startBtn.innerHTML= '<i class="fa fa-pause fa-2x"></i>'
    }

});
video.addEventListener('play', function updateBtn(){
    if(video.paused){
        startBtn.innerHTML= '<i class="fa fa-play fa-2x"></i>'
    }else{
        startBtn.innerHTML= '<i class="fa fa-pause fa-2x"></i>'
    }
});
video.addEventListener('timeupdate', function updateBar(){
    bar.value = (video.currentTime / video.duration) *100;

    var min = Math.floor(video.currentTime/60);
    if(min<10){
        min = '0' + String(min);
    }

    var sec = Math.floor(video.currentTime%60)
    if(sec<10){
        sec = '0' + String(sec);
    }

    stamp.innerHTML = `${min}:${sec}`;

});

startBtn.addEventListener('click', function toggleVideo(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
});

stopBtn.addEventListener('click', function stopVideo(){
    video.currentTime =0;
    video.pause();

})

//////////////////////////////////////////////////////////////////
// movie-list///

const todoInput = document.getElementById('todo-input');
const todoBtn = document.getElementById('todo-btn');
const todoList = document.getElementById('todo-list');
const deleteBtn = document.getElementById('delete-btn');
const completeBtn = document.getElementById('complete-btn');
const form = document.getElementById('form');
const todoContainer = document.getElementById('todo-container')
const small = document.getElementById('small')

todoBtn.addEventListener('click', addMovie);

// delete and check task
    todoList.addEventListener('click', function(e){
    const item = e.target;
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.classList.add('animation');
        todo.addEventListener('transitionend',function(){ // transitioned removes the item after the transition is completed
            todo.remove()
        })
    }   
})

    todoList.addEventListener('click', function(e){
        const item = e.target;
        if(item.classList[0] === "complete-btn"){
            const todo = item.parentElement;
            todo.classList.toggle('checked');
        }    
    })



function addMovie(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    if(todoInput.value !== ''){ // checking it there is some input
        small.innerText = '';
    todoDiv.classList.add("todo");
 
    const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
    
    
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class= "fas fa-check fa"></i>';
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class= "fas fa-trash fa"></i>';
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);
    // clear input value
    todoInput.value = '';
 }else{
     small.innerText='Enter something';
 }
}
// code for toggle the video button

const toggleVideo = document.getElementById('video-btn');
// const videoBody = document.getElementById('video-body');
const disappear = document.getElementById('toggling-body');

toggleVideo.addEventListener('click', function openVideo(){
    disappear.classList.toggle('open-video');
})

// code for food container

const foodForm = document.getElementById('food-form');
const submit = document.getElementById('submit-btn');
const inputFood = document.getElementById('input-food');
const result = document.getElementById('display-result');
const meals = document.getElementById('meals');
const meal = document.getElementById('meal');
// const getRecipe = document.getElementById('meals button');

// getRecipe.addEventListener('click', function)
submit.addEventListener('click', function searchFood(e){
    e.preventDefault(e);
    // console.log('click');
    if(inputFood.value === ''){
        alert ('enter value');
        
    }else{
        console.log(inputFood.value)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFood.value}`)
        .then(res => res.json())
        .then(data =>{
            // console.log('fetch returned data: ', data)
            
            if(data.meals === null){
                result.innerHTML = `<p>meal not found</p>`;
                inputFood.value = '';
            }else{
                result.innerHTML = `<h3>search for: '${inputFood.value}'</h3>`;
                console.log(data.meals)
                for(i=0;i<data.meals.length;i++){
                    meals.innerHTML = data.meals.map(meal =>`
                    <img src ="${meal.strMealThumb}"/>
                    <p>${meal.strMeal}</p>`
                    
                    )
                }
                inputFood.value='';
            }
        })
    }
    
})