<template>
    <div class="my-header">
        <span 
            v-for="item in headerItems" 
            :key="item.id" 
            class="my-header-item" 
            :class="item.id===curHead?'my-header-item-active':''"
            @click="routeChange(item.id)">
            {{item.name}}
        </span>
    </div>
</template>
<script>
    export default {
        props:{
            headerItems:Array
        },
        computed:{
            curHead(){
                
                return this.$route.params.id;
            }
        },
        methods:{
            routeChange(id){
                this.$router.push(`/item/${id}`)
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .my-header
        width:100%
        height 80px
        border-bottom:1px solid #eeeeee
        display:flex
        justify-content:center 
        align-items :center
        .my-header-item
            cursor:pointer
            padding:10px
            font-size 18px
            font-weight:bold
        .my-header-item-active
            color:red

    
</style>