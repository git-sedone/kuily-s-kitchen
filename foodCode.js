// CODE FOR FOOD CONTAINER

const foodForm = document.getElementById('food-form');
const submit = document.getElementById('submit-btn');
const inputFood = document.getElementById('input-food');
const result = document.getElementById('display-result');
const meals = document.getElementById('meals');
const meal = document.getElementById('meal');
const instruction = document.getElementById('instructions');
const imageClick = document.getElementById('imageFood');


submit.addEventListener('click', function searchFood(e){

    meals.value='';
    e.preventDefault(e);
    // showing error for empty search
    if(inputFood.value === ''){
        result.innerHTML =`<p>Come on!!! empty search?? type something</p>`;
        meals.innerHTML = '';
        
    }else{
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFood.value}`)
        .then(res => res.json())
        .then(data =>{
     
            // checking if the recipe is there
            if(data.meals === null){
                result.innerHTML = `<p>opss I don't know this meal..</p>`;
                inputFood.value = '';
                meals.innerHTML= '';
            }else{
                result.innerHTML = `<p>good choise: ${inputFood.value}</p>`;
                inputFood.value = '';
                
                for(i=0;i<data.meals.length;i++){
                    meals.innerHTML = data.meals.map(meal =>`
                    <img src = ${meal.strMealThumb} id = imageFood />
                    <h2> ${meal.strMeal} </h2>
                    <div class= h6 id= h6><h6> ${meal.strInstructions} </h6></div>`
                          
                    )
                }
                
            }
        })
    }
})