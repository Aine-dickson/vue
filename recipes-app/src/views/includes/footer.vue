<template>
    <nav class="flex justify-around text-2xl items-end h-full">
        <router-link :to="{name: 'home'}">
            <div class="p-2 sm:flex flex-col items-center">
                <i class="fas fa-house"></i>
                <span class="hidden sm:block text-lg">Home</span>
            </div>
        </router-link>
        <router-link :to="{name: 'fav'}">
            <div class="p-2 sm:flex flex-col items-center">
                <i class="fas fa-heart"></i>
                <span class="hidden sm:block text-lg">Favorites</span>
            </div>
        </router-link>
        <router-link :to="{name: 'history'}">
            <div class="p-2 sm:flex flex-col items-center">
                <i class="fas fa-bullseye"></i>
                <span class="hidden sm:block text-lg">History</span>
            </div>
        </router-link>
        <router-link :to="{name: 'profile'}">
            <div class="p-2 sm:flex flex-col items-center">
                <i class="fas fa-user"></i>
                <span class="hidden sm:block text-lg">Profile</span>
            </div>
        </router-link>
    </nav>
</template>