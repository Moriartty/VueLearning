<template>
    <div class="my-content">
        <Sidebar :default-key="defaultKey" :menu-items="menus"/>
        <div class="my-content-detail">
            <h2 :key="content.title">{{content.title}}</h2>
            <p :key="content.content">{{content.content}}</p>
        </div>
    </div>
</template>
<script>
    import Sidebar from './Sidebar';
    export default {
        data(){
            return {
                id:'item1',
                menus:[],
                defaultKey:'',
                content:{}
            }
        },
        components:{
            Sidebar:Sidebar
        },
        mounted(){
            const model = this.$store.state.model;
            this.id = this.$route.params.id;
            if(this.id){
                const _curSideMenu = model.menuItems[this.id][0].id;
                this.defaultKey = _curSideMenu;
                this.$store.commit('curSideMenuChange',_curSideMenu);
                this.menus = model.menuItems[this.id];
                this.content = model.contents[_curSideMenu];
            }
        },
        computed:{
           
        },
        watch:{
            $route:{
                handler:function(val){
                    const model = this.$store.state.model
                    // this.content = this.$store.state.model.contents[val.params.id];
                    this.$store.commit('curSideMenuChange',model.menuItems[val.params.id][0].id)
                }
            },
            
        }
    }
</script>
<style lang="stylus">
    .my-content
        width :100%
        display :flex;
        align-items :center
        justify-content :center
</style>