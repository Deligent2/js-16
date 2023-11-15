const row = document.querySelector('.row')




const handleGetCocktails = () => {
    fetch('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(drinks => {
                row.innerHTML += `
               <div class="col-3" >
<div class="box">
<h2 class="Title"> ${drinks.strDrink}</h2>
<img  src="${drinks.strDrinkThumb}" class="photo" alt="" />
<div class="card">
<p class="text1">${drinks.strAlcoholic}</p>
<p class="text7">${drinks.strCategory}</p>
<p class="text8">${drinks.strGlass}</p>
</div>
</div>
</div>
`
            })
        })
}
handleGetCocktails();