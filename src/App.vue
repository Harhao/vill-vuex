<template>
  <div id="app">
    <p>{{$store.state.age}}</p>
    <button @click="add">add</button>
    <button @click="add2">add2</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    add(){
      this.$store.commit('increAge');
    },
    add2(){
      console.log(1);
      this.$store.dispatch('plus',2);
    }
  },
  mounted() {
    console.log("App component",this.$store);
  },
}
</script>

<style>
</style>
