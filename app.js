const application_id ='aa357d12'
const application_key = '73020a0222aad8d4b51bfd1f0621745c'
// const search = 'pizza'

const input = document.querySelector('#search input')
const button = document.querySelector('#search button')
const container = document.querySelector('div.recipe_container')


const getRecipe = async (query) => {
    const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${application_id}&app_key=${application_key}`
    
    

    const res = await fetch(endpoint)
    const data = await res.json()
    const { hits } = data

    return hits
    // console.log(data)

}


const handleSearch = async ()=>{
    // console.log(input.innerHTML)
    // console.log(input.value)
    // const query = input.value 
    // const recipes = await getRecipe(query)
    // console.log(recipes)
    // recipes.forEach(recipe=>{
        // console.log(recipe.recipe)
    // })
        //clear the previous images
        // container.innerHTML = null  

        //SEARCH IMAGES
        const query = input.value 
        const hits = await getRecipe(query)
        hits.forEach(hit => {
            const { recipe } = hit
            const { image} = recipe
            const ele = document.createElement('img')
            ele.src = image
            console.log(ele)
            container.appendChild(ele)

            // const {recipe} = hit 
            // const ele = document.createElement('div')
            // const markup = createRecipeCard(recipe.image,query,recipe.totalTime,recipe.url)
            // ele.innerHTML = markup
            // container.appendChild(ele)
        })
        //



}


button.addEventListener('click', handleSearch) 





// getRecipe("Pizza")
// 