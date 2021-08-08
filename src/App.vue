<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
    <div id="nav">
      <router-link to="/detail" class="item">
        <svg class="icon">
          <use xlink:href="#icon-billingdetails"></use>
        </svg>
        明细
      </router-link>
      <router-link to="/" class="item">
        <svg class="icon">
          <use xlink:href="#icon-xiaofeizonge"></use>
        </svg>
        记账
      </router-link>
      <router-link to="/charts" class="item">
        <svg class="icon">
          <use xlink:href="#icon-areachart"></use>
        </svg>
        图标
      </router-link>
    </div>
  </div>
</template>

<style>
#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.content {
  flex-grow: 1;
  overflow: auto;
  border: 1px solid green;
}
#nav {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  background-color: #272a3b;
}
#nav .item {
  padding: 2px 0;
  width: 33.33333%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#nav .item .icon {
      width: 32px;
      height: 32px;
    }
#nav a {
  /* font-weight: bold;
  color: #2c3e50; */
  color: #c8c8c8;
}

#nav a.router-link-exact-active {
  color: #e1800b;
}
</style>
