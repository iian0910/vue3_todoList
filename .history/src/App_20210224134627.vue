<template>
  <TodoList/>
</template>

<script lang="ts">
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
@import './assets/scss/all';
</style>
