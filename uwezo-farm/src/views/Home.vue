<template>
  <div id="app">
    <div class="wrapper">
       <Header></Header>
       <div class="floating-form">
        <Signup></Signup>
      </div>
      <div class="service-section">
        <Servicelist></Servicelist>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Signup from '../components/Signup'
import Servicelist from '../components/Servicelist'
export default {
  name: 'Home',
  components:{
      Header,
      Signup,
      Servicelist
  },
  data(){
       return {
        slide: 0,
        sliding: null
      }
    }
}
</script>

<style >
.wrapper {
  position: relative;
  left: 0;
  top:0;
  z-index: 0;  /* Parent index needs to be lowe than the child index*/
}
.floating-form {
width: 30rem;
top: 0;
left: 0;
margin-top: 8rem;
margin-left: 70%;
z-index: 1;
position: absolute; /* Change this to make the signup/login form sticky*/
    
}   
.fullwidth {
  width: 100%;
  z-index: 0;
  opacity: 0.1;
}

#service-group{
  position: absolute;
  top: 0rem;
  left: 0;
  margin-top:60rem;
  z-index:2;
  
}
</style>