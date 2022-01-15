import React from 'react'
import ConnectWallet from './ConnectWallet'
import LoginForm from './LoginForm'

function SignInform() {
    return (
        <>
            <section className="sign_in_form bg-white">
                <div className="container">
                    <div className="row flex-lg-row-reverse">
                        
                        <div className="col-lg-6">
                            <LoginForm/>
                        </div>
                        <div className="col-lg-6">
                            <ConnectWallet/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignInform
