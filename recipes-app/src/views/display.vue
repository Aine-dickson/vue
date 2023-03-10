<template>
    <div class="container grid h-screen">
        <header class="bg-green-500">
            <app_header></app_header>
        </header>
        <nav class="hidden md:block">
            <app_nav></app_nav>
        </nav>
        <main class="max-h-full overflow-auto">
            <app_main></app_main>
        </main>
        <aside class="hidden md:block">
            <app_aside></app_aside>
        </aside>
        <footer class="md:hidden">
            <app_footer></app_footer>
        </footer>
    </div>
</template>

<script>

    import app_header from "@/views/includes/header.vue";
    import app_footer from "@/views/includes/footer.vue";
    import app_nav from "@/views/includes/nav.vue";
    import app_aside from "@/views/includes/aside.vue";
    import app_main from "@/views/includes/main.vue";

    export default{
        components: {
            app_aside,
            app_footer,
            app_header,
            app_main,
            app_nav
        },
    }

</script>

<style>
    .container{
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 10% 80% 10%;
        grid-template-areas: 
        'header header header header header header header header header header header header'
        'main main main main main main main main main main main main'
        'footer footer footer footer footer footer footer footer footer footer footer footer';
    }
    @media screen and (min-width: 768px) {
        .container{
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 10% 90%;
            grid-template-areas: 
            'header header header header header header header header header header header header'
            'nav nav main main main main main main main aside aside aside';
        }
    }
    header{
        grid-area: header;
    }
    nav{
        grid-area: nav;
    }
    main{
        grid-area: main;
    }
    aside{
        grid-area: aside;
    }
    footer{
        grid-area: footer;
    }
</style>