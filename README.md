# Cloud Social Wallet Reactjs SDK

Usage:
```js
npm install cloud-social-wallet
```

```js
import {WalletProvider} from "cloud-social-wallet";

function App() {
    return (
        <WalletProvider config={{rpc: '', backend_url: '', prefix: 'loop'}}>
            <WalletApp/>
        </WalletProvider>
    )
}
```


```js
import {useWallet} from "cloud-social-wallet";

function WalletApp() {
    const {address, logout, login} = useWallet()
    return (
        <>
            {
                address ? <>
                    <p>{address}</p>
                    <button onClick={logout}>Disconnect</p>
                </> : <>
                    <button onClick={() => login('google')}>Google Login</button>
                     <button onClick={() => login('sms')}>SMS</button>
                </>
            }
        </>
    )
}
```
