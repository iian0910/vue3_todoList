<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2 content">
        <!-- input 輸入框 -->
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            v-model="newTodo">
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="addTodo">送出</button>
          </div>
        </div>
        <!---->

        <!-- List 展示 -->
        <ul class="list">
          <li class="list-item" v-for="(todo, index) in todoList" :key="index">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" :id="todo.id">
              <label class="form-check-label" :for="todo.id">{{todo.title}}</label>
            </div>
          </li>
        </ul>
        <!---->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

interface Todo {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  id: string
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  title: string
}

export default defineComponent({
  name: 'TodoList',
  setup () {
    const newTodo = ref('')
    const todoList = [{
      id: '001',
      title: 'TEST'
    }]

    function addTodo () {
      if (newTodo.value) {
        todoList.push({
          id: '001',
          title: newTodo.value
        })
        console.log('nowTodoList:', todoList)
      }
    }

    return {
      todoList,
      newTodo,
      addTodo
    }
  }
})
</script>

<style lang="scss">
.content{
  padding: 30px;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
.list{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
