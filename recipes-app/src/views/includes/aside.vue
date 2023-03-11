<template>
    <div class="border-l border-l-gray-500 h-full">
        <details></details>
    </div>
</template>

<script>

    import details from '@/components/detailedRecipe.vue';
    import { ref } from 'vue'

    export default {
        components: {
            details
        },
        setup(){
            const recipe = ref([])
            const error = ref(null)

            const api = async() => {
                try {
                    let data = await fetch('http://localhost:3000/recipe/' + id)
                    if(!data.ok){
                        throw Error("Oops :) No recipe found")
                    }
                    recipe.value = await data.json()
                } catch (err) {
                    error.value = err
                }
            } 
            api()
            return {recipe, error}
        }
    }

</script>
