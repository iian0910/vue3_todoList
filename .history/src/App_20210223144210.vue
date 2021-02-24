<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TodoList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from './components/TodoList.vue'

export default defineComponent({
  name: 'App',
  components: {
    TodoList
  }
})
</script>

<style lang="scss">
@import './assets/scss/all';
</style>
