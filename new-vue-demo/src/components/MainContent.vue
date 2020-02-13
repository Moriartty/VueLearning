<template>
    <div class="my-content">
        <keep-alive>
        <Sidebar :default-key="defaultKey" :menu-items="menus" @increment="sideMenuIncrement"/>
        </keep-alive>
        <div class="my-content-detail">
            <h2 :key="content.title">{{content.title}}</h2>
            <p :key="content.content">{{content.content}}</p>
        </div>
    </div>
</template>
<script>
    import Sidebar from './Sidebar';
    import {mapMutations} from 'vuex';
    export default {
        data(){
            return {
                id:'item1',
            }
        },
        components:{
            Sidebar:Sidebar
        },
        created(){
            const model = this.$store.state.model;
            this.id = this.$route.params.id;
            if(this.id){
                const _curSideMenu = model.menuItems[this.id][0].id;
                // this.$store.commit('curSideMenuChange',_curSideMenu);
                this.curSideMenuChange(_curSideMenu);
            }
        },
        methods:{
            ...mapMutations(['curSideMenuChange','sideMenuIncrement']),
        },
        computed:{
            content(){
                const model = this.$store.state.model;
                // console.log('content',model.contents[model.curSideMenu])
                return model.contents[model.curSideMenu];
            },
            menus(){
                return this.$store.state.model.menuItems[this.$route.params.id]
            },
            defaultKey(){
                 const model = this.$store.state.model;
                 const _id = this.$route.params.id;
                 return model.menuItems[_id][0].id
            }
        },
        watch:{
            $route:{
                handler:function(val){
                    const model = this.$store.state.model
                    // this.content = this.$store.state.model.contents[val.params.id];
                    // this.$store.commit('curSideMenuChange',model.menuItems[val.params.id][0].id)
                    this.curSideMenuChange(model.menuItems[val.params.id][0].id)
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