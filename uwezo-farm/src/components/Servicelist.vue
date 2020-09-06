<template>
  <div id="app">
    <div class="container">
       <b-container class="body-container">
         <ul id="service-list">
           <li v-for="s in services" :key="s">
             <div class="service-card">
               <b-card
                border-variant="success" 
                :header="s.name"
                align="center"
                >
                  <b-card-img  class="card-img" src="https://static.vecteezy.com/system/resources/previews/000/633/797/non_2x/tractor-vector-illustration.jpg"></b-card-img>
                  <b-card-text class="card-text"><i>{{s.descr}}</i></b-card-text>
                  <br>
                  <b-button class="book-btn" variant="outline-primary">Book Now!</b-button>
              </b-card>
             </div>
           </li>
         </ul>
        </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      services:{
          name: null,
          description:'',
          priceRange:null

      }
    }
  },
  mounted(){
    axios.get('https://uwezofarm-f00a2.firebaseio.com/Services.json')
    .then((response) => {
                this.services = response.data
                
            })
  }
}
</script>

<style scoped>
.container {
  width: 100% auto;
  margin-left:10px;
  margin-right:10px ;
  padding:0;
}
.service-card {
 box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
 width: 18rem;
 transition: width 0.3s ;
}
.service-card:hover {
 color: #008000;
 width: 19rem;

}
#service-list li {
  display: inline-block;
  list-style: none;
  margin-left: 0;
  padding-right: 30px;
  padding-top: 50px;

}
li {
  list-style: none;
}
.card-img {
  margin-bottom: 20px;
}
.book-btn {
  float: right;
}
</style>