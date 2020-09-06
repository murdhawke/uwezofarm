<template>
  <div id="app">
    <b-overlay :show="show" >
      <div class="container">
            <div class="filter">
              <Servicesearch></Servicesearch>
            </div>
            <div class="body">
              <Servicelist></Servicelist>
            </div>
            
      </div>
      <template v-slot:overlay >
        <div class="text-center">
          <p>Do you have a service to offer?</p>
          <h4>Sign up with us!</h4>
          <div id="service-register">
              <addService></addService>
          </div>
          <br>
              <b-button variant="outline-secondary" id="close-btn" @click="show=false">Close</b-button>           
        </div>

      </template>
    </b-overlay>
    <b-button variant="outline-secondary" id="close-btn" @click="show=!show">Sign your Biz</b-button>
  </div>
</template>

<script>
import Servicesearch from '../components/Servicesearch'
import Servicelist from '../components/Servicelist'
import addService from '../components/addService'
export default {
  name: 'Services',
  components: { Servicesearch, Servicelist, addService },
  data() {
    return {
      show: false
    }
  },
  //created() {
  //  setTimeout(() => this.show = true, 3000)
//}/
}
</script>

<style>
.container {
  padding: 20px;
  
}
.body {
  margin: 0;
  width: 100%;
}
#service-register {
  float: right;
  
}
#close-btn {
  margin-top:5px;
}
.b-overlay {
  background-image: url("https://capeorchard.co.za/wp-content/uploads/2016/11/COC-Transport-6140-1240x826.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>