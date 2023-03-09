<template>
    <nav class="flex flex-col justify-between h-full text-xl font-semibold border-r border-r-gray-500">
        <section class="flex flex-col justify-evenly h-[50%]">
            <router-link :to="{name: 'home'}">
                <div class="p-2 space-x-2">
                    <i class="fas fa-house"></i>
                    <span>Home</span>
                </div>
            </router-link>
            <hr>
            <router-link :to="{name: 'fav'}">
                <div class="p-2 space-x-2">
                    <i class="fas fa-heart"></i>
                    <span>Favorites</span>
                </div>
            </router-link>
            <hr>
            <router-link :to="{name: 'history'}">
                <div class="p-2 space-x-2">
                    <i class="fas fa-bullseye"></i>
                    <span>History</span>
                </div>
            </router-link>
            <hr>
            <router-link :to="{name: 'profile'}">
                <div class="p-2 space-x-2">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </div>
            </router-link>
            <hr>
            <router-link :to="{name: 'settings'}">
                <div class="p-2 space-x-2">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </div>
            </router-link>
            <hr>
        </section>
        <section>
            <div class="p-2 space-x-2">
                <i class="fas fa-right-from-bracket"></i>
                <span>Log out</span>
            </div>
            <div class="p-2 space-x-2">
                <i class="fas fa-right-to-bracket"></i>
                <span>Login</span>
            </div>
        </section>
    </nav>
</template>