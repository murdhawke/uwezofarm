<template>
  <div class="mainnav">
    <nav class="navbar">
      <router-link v-for="routes in links"
                   v-bind:key="routes.id" 
                   :to="`${routes.page}`"
                   class="routelinks">
                   {{routes.text}}
        </router-link>
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
.mainnav {
  background-color:#008000;
  padding:15px;
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