<template>
    <div class="menu-wrap">
        <el-menu 
            :default-key="defaultKey"
            @select="handleMenuChange"
            active-text-color="#333">
            <template v-for="menu in menuItems">
                <el-menu-item 
                    :key="menu.id"
                    :index="menu.id">
                    <span>{{menu.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
    import {  mapMutations } from "vuex";
    export default {
        props:{
            menuItems:Array,
            defaultKey:String
        },
        data(){
            return {
                curSideMenu:''
            }
        },
      
        methods:{
            ...mapMutations({
                handleMenuChange:"curSideMenuChange"
            })
        }
    }
</script>

<style lang="stylus">
    .menu-wrap
        width:200px
        margin-right:20px
</style>