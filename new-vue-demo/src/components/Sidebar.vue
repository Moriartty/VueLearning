<template>
    <div class="menu-wrap">
        <el-menu 
            :default-active="defaultKey"
            @select="handleMenuChange"
            active-text-color="red">
            <template v-for="menu in menuItems">
                <el-menu-item 
                    :key="menu.id"
                    :index="menu.id">
                    <span>{{menu.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
        <el-button @click="addMenu" type="primary">Add Menu</el-button>
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
            }),
            addMenu(){
                this.$emit('increment',this.$route.params.id);
            }
        }
    }
</script>

<style lang="stylus">
    .menu-wrap
        width:200px
        margin-right:20px
</style>