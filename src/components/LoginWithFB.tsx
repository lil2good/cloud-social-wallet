// @ts-nocheck
import classNames from 'classnames'
import './LoginWithGoogle.css'
import React from 'react'
const  LoginWithFB = (props) => {
    return (<div {...props} className={classNames('googleBtn', props?.className)}>
        <div className={'googleIconWrapper'}>
            <img alt={''} className={'googleIcon'} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDEyQzI0IDE3Ljk4OTcgMTkuNjExNiAyMi45NTQyIDEzLjg3NSAyMy44NTQyVjE1LjQ2ODhIMTYuNjcxMUwxNy4yMDMxIDEySDEzLjg3NVY5Ljc0OTA2QzEzLjg3NSA4Ljc5OTg0IDE0LjM0IDcuODc1IDE1LjgzMDYgNy44NzVIMTcuMzQzOFY0LjkyMTg4QzE3LjM0MzggNC45MjE4OCAxNS45NzAzIDQuNjg3NSAxNC42NTczIDQuNjg3NUMxMS45MTY2IDQuNjg3NSAxMC4xMjUgNi4zNDg3NSAxMC4xMjUgOS4zNTYyNVYxMkg3LjA3ODEyVjE1LjQ2ODhIMTAuMTI1VjIzLjg1NDJDNC4zODg0NCAyMi45NTQyIDAgMTcuOTg5NyAwIDEyQzAgNS4zNzI4MSA1LjM3MjgxIDAgMTIgMEMxOC42MjcyIDAgMjQgNS4zNzI4MSAyNCAxMloiIGZpbGw9IiMxODc3RjIiLz4KPHBhdGggZD0iTTE2LjY3MTEgMTUuNDY4OEwxNy4yMDMxIDEySDEzLjg3NVY5Ljc0OTAyQzEzLjg3NSA4LjgwMDAzIDE0LjMzOTkgNy44NzUgMTUuODMwNiA3Ljg3NUgxNy4zNDM4VjQuOTIxODhDMTcuMzQzOCA0LjkyMTg4IDE1Ljk3MDUgNC42ODc1IDE0LjY1NzYgNC42ODc1QzExLjkxNjUgNC42ODc1IDEwLjEyNSA2LjM0ODc1IDEwLjEyNSA5LjM1NjI1VjEySDcuMDc4MTJWMTUuNDY4OEgxMC4xMjVWMjMuODU0MkMxMC43MzYgMjMuOTUgMTEuMzYyMSAyNCAxMiAyNEMxMi42Mzc5IDI0IDEzLjI2NCAyMy45NSAxMy44NzUgMjMuODU0MlYxNS40Njg4SDE2LjY3MTFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />
        </div>
        <div className={'text'}>
            <p className={'btnText'}><b>Continue with Facebook</b></p>
        </div>
    </div>)
}
export default LoginWithFB