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
            v-model="todoTitle">
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
          <li class="list-item" v-for="item in todoList" :key="item.id">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" :id="item.id">
              <label class="form-check-label" :for="item.id">{{item.title}}</label>
            </div>
          </li>
        </ul>
        <!---->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TodoList',
  data () {
    return {
      todoTitle: '',
      todoList: [
        {
          id: '001',
          title: 'test'
        }
      ]
    }
  },
  methods: {
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
.list{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
