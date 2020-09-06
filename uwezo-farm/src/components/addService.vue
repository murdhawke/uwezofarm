<template>
  <div id="app">
        <b-form >
          <b-form-group id="name-group" label="Company Name" label-for="name-group">
            <b-form-input id="name-input" v-model="service.name" required placeholder="Enter your name"></b-form-input>
          </b-form-group>
          <b-form-group id="pin-group" label="KRA PIN" label-for="pin-group">
            <b-form-input id="pin-input" v-model="service.pin" required placeholder="PIN"></b-form-input>
          </b-form-group>
          <b-form-group id="phone-group" label="Office Number" label-for="phone-group">
            <b-form-input id="phone-input" v-model="service.phoneNumber" required placeholder="+254"></b-form-input>
          </b-form-group>
          <b-form-group id="email-group" label="Company Email" label-for="email-group">
            <b-form-input id="email-input" v-model="service.email" required placeholder="Email Address:"></b-form-input>
          </b-form-group>
             <b-button @submit="registerService" variant="info">Register!</b-button> 
        </b-form>
    </div>
</template>


<script>
//import firebase from 'firebase'
import axios from 'axios'
export default {
  data() {
    return {
      service: {
            name:'',
            pin:'',
            phoneNumber:'',
            email:'',
            serviceType:'',
            serviceName:'',
            description:'',
            priceRange:null
            }
    }
  },
  methods: {
    registerService () {
      axios.post('https://uwezofarm-f00a2.firebaseio.com/service.json',this.service )
      .then(() => {
        console.log(this.service);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

}
</script>

<style scoped>
#app {
  border-color:#008800 ;
  border-style:solid;
  padding: 10px;

}
</style>
