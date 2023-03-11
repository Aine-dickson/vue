<template>
    <div class="min-h-full overflow-auto">
        <section>
            <hero></hero>
        </section>
        <section>
            <span>Recipes</span>
            <div v-if="recipes.length" class="space-y-16">
                <recipe @click="clickListner(recipe.id)" v-for="(recipe, index) in recipes" :origin="recipe.origin" :serve_size="recipe.serve_size" :img_url="recipe.image" :key="recipe.id" :name="recipe.name"/>
            </div>
            <div v-else>
                {{ error }}
            </div>
        </section>
    </div>
</template>

<script>

    import recipe from '@/components/recipe.vue';
    import hero from '@/components/hero.vue';
    import { ref } from 'vue';
    import { getCurrentInstance, onMounted } from 'vue';

    export default {
        components: {
            recipe,
            hero
        },
        emits:["recipeId"],
        setup(){

            const recipes = ref([])
            const error = ref(null)
            const instance = ref(null)

            onMounted(() => {
                instance.value = getCurrentInstance()
            })

            const api = async() => {
                try {
                    let data = await fetch('http://localhost:3000/recipes')
                    if(!data.ok){
                        throw Error("Oops :) No recipe found")
                    }
                    recipes.value = await data.json()
                } catch (err) {
                    error.value = err
                }
            } 
            api()
            function clickListner(id){
                instance.value.emit('recipeId', id)
            }
            return {recipes, error, clickListner}
        }
    }

</script>