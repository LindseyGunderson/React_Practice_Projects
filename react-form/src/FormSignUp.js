import React from 'react'

const FormSignUp = () => {
    return (
       
        <div clasName="form-content-right">

            <form className="form">
                <h1>Get started with us today. Create your account by filling out the information below.</h1>

                {/* username field */}
                <div className="form-inputs">
                    <label className="form-label" htmlFor="username">
                       Username 
                    </label>
                    <input type="text" 
                                id="username"
                                name="username" 
                                className="form-input" 
                                placeholder="Enter your username"/>
                </div>

                {/* email field */}
                <div className="form-inputs">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input type="email" 
                                id="email"
                                name="email" 
                                className="form-input" 
                                placeholder="Enter your email"/>
                </div>

                <div className="form-inputs">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input type="password" 
                                id="password"
                                name="password" 
                                className="form-input" 
                                placeholder="Enter your password"/>
                </div>

                <div className="form-inputs">
                    <label className="form-label" htmlFor="confirm-password">
                      Confirm Password
                    </label>
                    <input type="confirm-password" 
                                id="confirm-password"
                                name="confirm-password" 
                                className="form-input" 
                                placeholder="Confirm password"/>
                </div>

                <button className="form-input-button"
                        type="submit">
                    
                Sign Up
                </button>

                <span>Already have an account? Login <a href="">Here</a></span>

            </form>

        </div>

    )
}

export default FormSignUp
