import React, {createContext} from "react";
import {Provider} from "../types/config.ts";

const ConnectWalletContext = createContext({
    address: "",
    client: undefined,
    wallet: undefined,
    // @ts-ignore
    login: (provider: Provider):void => {},
    logout: ():void => {}
})

export function useWallet() {
    return React.useContext(ConnectWalletContext)
}

export default  ConnectWalletContext