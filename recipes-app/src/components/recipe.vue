<template>
    <article class="flex h-[15rem] space-x-2 overflow-hidden rounded-xl shadow-lg shadow-black">
        <div class="h-full min-w-[10rem] max-w-[50%]">
            <img :src="img_url" :alt="recipe_name" class="object-fill w-full h-full">
        </div>
        <div class="desc max-h-full">
            <div class="text-xl flex flex-col">
                <span class="font-semibold text-2xl">Name:</span>
                <span class=" font-medium text-gray-500 ml-8">{{ recipe_name }}</span>
            </div>
            <div class="hidden text-xl sm:flex flex-col">
                <span class="font-semibold text-2xl">Origin:</span>
                <span class=" font-medium text-gray-500 ml-8">{{ origin }}</span>
            </div>
            <div class="text-xl flex flex-col">
                <span class="font-semibold text-2xl">Serve size:</span>
                <span class=" font-medium text-gray-500 ml-8">{{ serve_size }}</span>
            </div>
        </div>
    </article>
</template>

<script>

    import { ref } from 'vue'

    export default{
        props:[
            'id',
            'name',
            'origin',
            'img_url',
            'serve_size',
            'ingredients',
            'procedure'
        ],
        setup(props){
            const recipe_name = ref(props.name)
            const img_url = ref(props.img_url)
            const id = ref(props.id)
            const origin = ref(props.origin)
            const serve_size = ref(`${props.serve_size.substring(0, 65)}...`)

            return {recipe_name, img_url, id, origin, serve_size}
        }
    }

</script>

<style>
    img{
        object-fit: fill;
        height: 100%;
        width: 100%;
    }
</style>