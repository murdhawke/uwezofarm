<template>
    <div id="app">
        <div class="signup">
                <header>
                    <h3>Sign Up</h3>
                </header>   
                <b-card
                    header="Create an account"
                    header-text-variant="white"
                    header-tag="header"
                    header-bg-variant="success"
                    style="maz-width: 20rem;"
                    id="signup-card"
                    >
                        
                        <b-form id="signup-form">
                            <b-form-group
                                id="email-group"
                                label="Email Address"
                                label-for="email-input"
                                description="We'll never share your email with anyone else."                         
                            >
                            <b-form-input
                                id="email-input"
                                type="email"
                                required
                                placeholder="Enter email"
                            >   </b-form-input>

                            </b-form-group>
                            <b-form-group
                                id="pass-group"
                                label="Password"
                                label-for="pass-input"                      
                            >
                            <b-form-input
                                id="pass-input"
                                type="password"
                                required
                                placeholder="Password"
                            >   </b-form-input>

                            </b-form-group>
                            <b-form-group
                                id="submit-btn"
                                type="button"    
                            >
                                <b-button variant="outline-success">Sign Up</b-button>
                                <br>
                                <p>Have an account? <a href="#">   Sign In</a></p>
                            </b-form-group>
                        </b-form>
                
                </b-card>
            </div>
    </div>
</template>


<style>
header {
    text-align: center;
    padding: 5px;
}
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
</style>