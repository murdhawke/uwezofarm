<template>
    <div id="app">
        <div class="signup">  
                <b-card header="Create an account" header-text-variant="white"  header-tag="header"  header-bg-variant="success" style="maz-width: 20rem;" id="signup-card">
                        <b-form id="signup-form">
                            <b-form-group v-model="user.name"  id="name-group" label="Name" label-for="name-input">
                                <input type="text" class="form-control" id="name" v-model="user.name"/>
                            </b-form-group>
                            <b-form-group
                                id="email-group"
                                label="Email Address"
                                label-for="email-input"
                                description="We'll never share your email with anyone else."                        
                            >
                                <input type="text" class="form-control" id="email" v-model="user.email"/>

                            </b-form-group>
                            <b-form-group
                                id="pass-group"
                                label="Password"
                                label-for="pass-input" 
                                v-model="user.password"                     
                            >
                                <input type="password" class="form-control" id="password" v-model="user.password"/>

                            </b-form-group>
                            <b-form-group
                                id="submit-btn"
                                type="button"    
                            >
                                <b-button  @click="userRegistration()" variant="outline-success">Sign Up</b-button>
                                <br>
                                <p id="loginprompt">Have an account? <a href="#">   Sign In</a></p>

                            </b-form-group>
                        </b-form>
                
                </b-card>
            </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            user: {
                'name':'',
                'email':'',
                'password':''
            }
        };
    },
    methods: {
       userRegistration() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then((res) => {
            res.user
                 .updateProfile({
            displayName: this.user.name
             })
                .then(() => {
            this.$router.push('/services')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
        }
    }
}
</script>


<style>

.signup {
    padding: 15px;
}
#signup-card {
    border-radius: 5px;
box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
}
#loginprompt {
    display: inline;
    float: right;
}
</style>