<template>
  <div id="app">
    <div class="container">
      <div class="filter">
        <Servicesearch></Servicesearch>
      </div>
    </div>
  </div>
</template>

<script>
import Servicesearch from '../components/Servicesearch'
export default {
  name: 'Services',
  components: {
    Servicesearch
  }
}
</script>

<style>
.container {
  padding: 20px;
  
}
</style>