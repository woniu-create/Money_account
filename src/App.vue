<template>
  <div id="app">
    <div class="content">
     <router-view/>
    </div>
    <div id="nav">
      <router-link to="/">Money</router-link> |
      <router-link to="/detail">Detail</router-link> |
      <router-link to="/charts">Charts</router-link>
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
  padding: 30px;
}

#nav a {
  /* font-weight: bold;
  color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
