import React, {createContext} from "react";
import {Type} from "../types/config.ts";

const ConnectWalletContext = createContext({
    address: "",
    client: undefined,
    wallet: undefined,
    // @ts-ignore
    login: (type: Type):void => {},
    logout: ():void => {}
})

export function useWallet() {
    return React.useContext(ConnectWalletContext)
}

export default  ConnectWalletContext