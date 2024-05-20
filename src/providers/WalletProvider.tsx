// @ts-nocheck
import {ReactNode} from "react";
import {Config} from "../types/config";
import useConnectWallet from "../hooks/useConnectWallet";
import ConnectWalletContext from "../context/connectWallet";

function WalletProvider({children, config}:{children: ReactNode, config: Config}) {
    const {address, client, login, logout,wallet} = useConnectWallet({config})
    return (
        <ConnectWalletContext.Provider value={{address, client, login, logout,wallet}}>
            {children}
        </ConnectWalletContext.Provider>
    )
}

export default WalletProvider