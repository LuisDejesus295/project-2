import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <section className = 'sections'>
                <div className='signup-background'>
                    <div id="signup-box">
                        <div class="left">
                            <h1 className='signup-header'>Sign up</h1>
                            
                            <input type="text" name="username" placeholder="Username" />
                            <input type="text" name="email" placeholder="E-mail" />
                            <input type="password" name="password" placeholder="Password" />
                            <input type="password" name="password2" placeholder="Retype password" />
                            
                            <input type="submit" name="signup_submit" value="Sign me up" />
                        </div>
                        
                        <div class="right">
                            <span class="loginwith">Sign in with<br />social network</span>
                            
                            <button class="social-signin facebook">Log in with facebook</button>
                            <button class="social-signin twitter">Log in with Twitter</button>
                            <button class="social-signin google">Log in with Google+</button>
                        </div>
                        <div class="or">OR</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SignUp;