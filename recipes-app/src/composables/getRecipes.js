import { ref } from vue

const getRecipes = function(){
    const recipes = ref([])
            const error = ref(null)

            const api = async() => {
                try {
                    let data = await fetch('http://localhost:3000/recipes')
                    if(!data.ok){
                        throw Error("Oops :) No recipe found")
                    }
                    recipes.value = await data.json()
                    console.log(recipes.value)
                } catch (err) {
                    error.value = err
                    console.log(err)
                }
            } 
            api()
    return {api }
}