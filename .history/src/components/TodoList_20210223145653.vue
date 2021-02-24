<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2 content">
        <!-- input 輸入框 -->
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient's username">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">送出</button>
          </div>
        </div>
        <!---->

        <!-- List 展示 -->
        <ul class="list">
          <li class="list-item">LIST ITEM</li>
        </ul>
        <!---->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {

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
