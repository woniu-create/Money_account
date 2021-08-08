<template>
  <div class="app">
      <ul class="tabs">
        <li class="tabs-item selected">支出</li>
        <li class="tabs-item">收入</li>
      </ul>
    <div class="tags">2</div>
    <div class="notes">3</div>
    <div class="numberPad">4</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
  // components: {
  //   HelloWorld
  // }
}
</script>
<style stylus="stylus" scoped>
.home {
  /* border: 1px solid green */
}
.tabs {
  background: #272a3b;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 20px;
}
.tabs-item {
  /* width: 50%; */
  margin: 0px 5px 0px 5px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
}
.selected::after{
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 4px;
   background-color: #fff;
}
</style>
