import Vue from 'vue';
import Vuex from 'vuex';
import model from './modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        model:model
    }
})