<template>
    <div>
        <div>
            <img :src="recipes.image" alt="">
        </div>
        <div>
            <div class="text-xl flex flex-col">
                <span class="font-semibold text-2xl">Name:</span>
                <span class=" font-medium text-gray-500 ml-8">{{ recipe.name }}</span>
            </div>
            <div class="text-xl flex flex-col">
                <span class="font-semibold text-2xl">Origin:</span>
                <span class=" font-medium text-gray-500 ml-8">{{ recipe.origin }}</span>
            </div>
            <div class="text-xl flex flex-col">
                <span class="font-semibold text-2xl">Serve size:</span>
                <span class=" font-medium text-gray-500 ml-8">{{ recipe.serve_size }}</span>
            </div>
            <div class="text-xl flex flex-col">
                <span class="font-semibold text-2xl">Ingredients:</span>
                <span class=" font-medium text-gray-500 ml-8">{{ recipe.ingredients }}</span>
            </div>
            <div class="text-xl flex flex-col">
                <span class="font-semibold text-2xl">Procedure:</span>
                <span class=" font-medium text-gray-500 ml-8">{{ recipe.procedure }}</span>
            </div>
        </div>
    </div>
</template>

<script>
</script>