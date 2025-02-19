import React, {createContext} from "react";

const ConnectWalletContext = createContext({
    address: "",
    client: undefined,
    wallet: undefined,
    // @ts-ignore
    login: (provider: 'sms' | 'google' | 'facebook' | 'twitter' | 'telegram' | 'auth'):void => {},
    logout: ():void => {}
})

export function useWallet() {
    return React.useContext(ConnectWalletContext)
}

export default  ConnectWalletContext