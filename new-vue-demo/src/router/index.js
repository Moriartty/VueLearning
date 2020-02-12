import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store';
import MainContent from '../components/MainContent'


Vue.use(Router);

let router = new Router({
    mode:"history",
    routes:[
        {path:'/item/:id',component:MainContent,props:true},
    ]
})

export default router;