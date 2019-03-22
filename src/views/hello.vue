<template>
    <div>
        {{$store.state.age}}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "hello",
  mounted() {
    console.log("hello components", this.$store);
  }
};
</script>

<style>
</style>
