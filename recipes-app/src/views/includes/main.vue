<template>
    <div class="p-2">
        <router-view @recipeId="idParser"></router-view>
    </div>
</template>

<script>

    import { onMounted, getCurrentInstance, ref } from 'vue';

    export default{

        emits: ['idBroadCast'],

        setup(){
            const instance = ref(null)

            onMounted(() =>{
                instance.value = getCurrentInstance()
                console.log('mounted')
            })
            
            function idParser(Id){
                console.log("clicked" + Id)
                instance.value.emit('idBroadCast', Id)
            }

            return {idParser}
        }
    }
</script>