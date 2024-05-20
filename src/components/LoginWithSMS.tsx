// @ts-nocheck
import React from 'react'
import './LoginWithGoogle.css'
import classNames from "classnames"
const  LoginWithSMS = (props) => {
    return (<div {...props} className={classNames('googleBtn', props?.className)}>
        <div className={classNames('googleIconWrapper', 'wrapper')}>
            <img alt={''} className={'googleIcon'}  src=""/>
        </div>
        <div className={'text'}>
            <p className={'btnText'}><b>Continue with SMS</b></p>
        </div>
    </div>)
}
export default LoginWithSMS