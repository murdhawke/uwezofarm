<template>
  <div class="mainnav">
    <nav class="navbar">
      <router-link v-for="routes in links"
                   v-bind:key="routes.id" 
                   :to="`${routes.page}`">
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
        page: '/Services'
      },
      {
        id:2,
        text: 'Orders',
        page: '/Orders'
      },
      {
        id:4,
        text: 'About',
        page: '/About'
      }
    ]
  }
  }
}
</script>


<style  scoped>
.mainnav {
  width: 100%;
  margin-top: 40px;
}
nav.navbar {
  width: 100%;
  text-align: center;
  padding:20px;
  display: block;
}
.navbar a {
  padding: 50px;
  text-decoration: none;
}
</style>