const row = document.querySelector('.row')
const input = document.querySelector('#input')
const box = document.querySelector('.box')
const logo = document.querySelector('.logo')
const btnSearch = document.querySelector('#searchBtn')
console.log(123123123)
const handleGetCocktails = () => {
    fetch(`https://www.themealdb.com/api/json/v2/1/popular.php`)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(food => {
                row.innerHTML += `
                <div class="col-4">
                    <div class="card">
                        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p>${food.strMeal}</p>
                    <p>Categories: ${food.strCategory}</p>
                    <p>Tags: ${food.strTags.split(',').join(', ')}</p>
                    </div>
                </div>
            </div>
        `
            })

        })
}

handleGetCocktails()

btnSearch.addEventListener('click', () => {
    console.log(123123);

    const value = input.value;

    if (value !== '') {
        row.classList.add('hidden');
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            .then(res => res.json())
            .then(data => {
                const meals = data.meals[0]
                console.log(meals)
                box.innerHTML = `
                    <div class="row">
                        <div class="col-6">
                            <h1>Dish information</h1>
                            <div class="rounded">
                                <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p>${meals.strMeal}</p>
                                    <p>Categories: ${meals.strCategory}</p>
                                    <p>Tags: ${meals.strTags.split(',').join(', ')}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 ingredients"> 
                            <div class="col-6">
                                <img src="https://www.themealdb.com/images/ingredients/${meals.strIngredient1}.png" alt="">
                                <p>${meals.strIngredient1}</p>
                            </div>
                            <div class="col-6">
                                <img src="https://www.themealdb.com/images/ingredients/${meals.strIngredient2}.png" alt="">
                                <p>${meals.strIngredient2}</p>
                            </div>                  
                            <div class="col-6">
                                <img src="https://www.themealdb.com/images/ingredients/${meals.strIngredient3}.png" alt="">
                                <p>${meals.strIngredient3}</p>
                            </div>                  
                            <div class="col-6">
                                <img src="https://www.themealdb.com/images/ingredients/${meals.strIngredient4}.png" alt="">
                                <p>${meals.strIngredient4}</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="video">
                                <iframe
                                    width="80%"
                                    height="690px" 
                                    src="https://www.youtube.com/embed/uO0ejc85zSE" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                `
            })
    }
});

// Для проверяющего:когда нажимаешь на лого будут выведены все коктели
logo.addEventListener('click' ,() => {
    console.log(123123)
    row.classList.remove('hidden')
})


input.addEventListener('keypress',()=>{
    if(event.key==='Enter'){
        event.preventDefault()
        btnSearch.click()
    }
})