<template>
  <div class="mainnav">
      <div class="logo-wrapper">
        <img src="../assets/img/logo2.png" alt="" id="logo" />
      </div>
      <div class="tagline">
        <h3>Uwezo Farm</h3>
      </div>
    <nav class="navbar">
      <router-link v-for="routes in links"
                   v-bind:key="routes.id" 
                   :to="`${routes.page}`"
                   class="routelinks">
                   {{routes.text}}
        </router-link>
        <img src="../assets/img/user.png" alt="" id="user"/>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data(){
    return {
    links: [
      {
        id:0,
        text: 'Home',
        page: '/'
      },
      {
        id:1,
        text: 'Services',
        page: '/services'
      },
      {
        id:2,
        text: 'Orders',
        page: '/orders'
      },
      {
        id:4,
        text: 'About',
        page: '/about'
      }
    ]
  }
  }
}
</script>


<style  scoped>
.logo-wrapper {
  width: 50px;
  float: left;
  padding-left: 50px;
}
.tagline {
  width: 400px;
  height: 10px;
  margin-left: 110px;
  padding-top: 20px;
  color: white;
}
#logo {
  width: 50px;
  height: 50px;
  padding-top: 10px;
  margin: 0;
}
#user {
  width: 50px;
  height: 55px;
  padding-bottom: 20px;
  margin: 0;
}
.mainnav {
  background-color:#008000;
  padding:5px;

  }
.navbar {
  display: block;
  text-align: right;
  padding: 10px;
  margin-right:6%; 
}
.routelinks {
  margin-right:50px;
  text-decoration: none;
  color: white;
  font-size: large;
  margin-right: 50px;
}


</style>