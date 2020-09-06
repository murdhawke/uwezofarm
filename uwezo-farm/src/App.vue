<template>
  <div id="app">
    <Navigation></Navigation>
     <router-view/>
      
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap');
#app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
