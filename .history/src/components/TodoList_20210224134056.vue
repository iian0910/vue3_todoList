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

        <div class="segmentation"></div>

        <!-- List 展示 -->
        <ul class="list">
          <li
            class="list-item d-flex justify-content-between align-items-center"
            v-for="(todo, index) in todoList" :key="index">
            <label class="list-item-title m-0 p-0">{{todo.title}}</label>
            <div
              class="remove-list"
              @click="removeTodo(index)">Remove</div>
          </li>
        </ul>
        <!---->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'

interface Todo {
  id: string;
  title: string;
}

export default {
  name: 'TodoList',
  setup () {
    // ref:
    // 可以接受「任何型態」的資料
    // 但是不會對「物件」或「陣列」內部的屬性變動做監聽

    // reactive
    // 「只接受」物件或陣列，可以做深層的監聽
    // 以及取得資料不需要 「.value」
    const data = localStorage.getItem('todos')
    const newTodo = ref('')
    const todoList = data ? JSON.parse(data) : reactive<Todo[]>([])

    // methods
    function addTodo () {
      if (newTodo.value) {
        todoList.push({
          id: Math.floor(Date.now()).toString(),
          title: newTodo.value
        })
        newTodo.value = ''
        const _todoList = JSON.stringify(todoList)
        localStorage.setItem('todos', _todoList)
      }
    }

    function removeTodo (idx: number) {
      todoList.splice(idx, 1)
      const _todoList = JSON.stringify(todoList)
      localStorage.setItem('todos', _todoList)
    }

    // return
    return {
      todoList,
      newTodo,
      addTodo,
      removeTodo
    }
  }
}
</script>

<style lang="scss">
.content{
  padding: 30px;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
.segmentation{
  margin-bottom: 30px;
  border-bottom: 6px solid rgb(206, 206, 206);
  border-radius: 3px;
}
.list{
  padding: 0;
  margin: 0;
  list-style: none;
}
.list-item{
  padding: 10px 0;
  margin-bottom: 0;
  border-bottom: 1px solid rgb(206, 206, 206);
}
.remove-list{
  padding: 3px;
  border-radius: 5px;
  background-color: rgb(175, 175, 175);
  font-size: 12px;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: rgb(250, 75, 113);
  }
}
</style>
