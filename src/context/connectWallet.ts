import React, {createContext} from "react";

const ConnectWalletContext = createContext({
    address: "",
    client: undefined,
    wallet: undefined,
    login: (type: string) => {
        return type;
    },
    logout: () => {
        return false;
    }
})

export function useWallet() {
    return React.useContext(ConnectWalletContext)
}

export default  ConnectWalletContext