<template>
  <div id="app">
    <MyHeader v-bind:header-items="headerItems" />
    <router-view/>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue'


export default {
  name: 'App',
  data(){
    return {
      headerItems:[
        {id:'item1',name:'item1'},
        {id:'item2',name:'item2'},
        {id:'item3',name:'item3'}
      ]
    }
  },
  components: {
    MyHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
