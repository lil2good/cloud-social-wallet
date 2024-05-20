import Cookie from "js-cookie";
import {useEffect, useState,useRef} from "react";
import io from "socket.io-client";
import { toUtf8 } from "@cosmjs/encoding";
import {DirectSecp256k1Wallet} from "@cosmjs/proto-signing";
import {SigningCosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {Config} from "../types/config.ts";

const getClient = async (rpc: string,key = '') => {
    if(key.length > 0) {
        try{
            const privateKey = toUtf8(key);
            const wallet = await DirectSecp256k1Wallet.fromKey(privateKey, 'juno');
            const client =  await SigningCosmWasmClient.connectWithSigner(
                rpc,
                wallet
            )
            return{
                wallet,
                client
            }
        }catch (e){
            console.log("wallet connection failed",e)
            return undefined
        }
    }
    return undefined
}

const useConnectWallet = ({config}:{config: Config}) => {
    const [address, setAddress] = useState<undefined|string>('');
    const [client, setClient] = useState("");
    const [wallet, setWallet] = useState("");
    const count = useRef(0);
    const socket = io(config.backend_url, {
        transports: ["websocket"],
        withCredentials: true
    });
    useEffect(() => {
        socket.on("getTokenRes", (msg) => {
            if(msg.success && socket.id === msg.id) {
                getClient(config.rpc,msg.token).then((cli) => {
                    // @ts-ignore
                    setClient(cli.client);
                    // @ts-ignore
                    setWallet(cli.wallet);
                })
            }
        });
        socket.on("error", () => {
            console.log("socket disconnected")
        });
        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, []);
    const getToken = () => {
        const cookie = Cookie.get("cookie");
        cookie && socket.id && socket.emit("getToken", { cookie: cookie, id: socket.id });
    }
    const initialize = () => {
        getToken();
        const address = Cookie.get("address");
        address && setAddress(address)
    }

    useEffect(()=>{
        const interval = setInterval(()=> {
            if(!client && count.current <= 7){
                initialize();
                count.current += 1
            }
        }, 1000)
        return () => clearInterval(interval)
        },[])

    useEffect(() => {
        const handler = (event:any) => {
            if (event.data.address) {
                setAddress(event.data.address)
                Cookie.set("cookie", event.data.cookie);
                Cookie.set("address", event.data.address);
                getToken();
            }
        };
        window.addEventListener("message", handler)
        return () => window.removeEventListener("message", handler)
    }, [])

    const login = (type:string ) => {
        const namespace = {
            'sms': '/sms',
            'google': '/login/federated/google',
            'facebook': '/login/federated/facebook',
        }[type]
        const url = `${config.backend_url}${namespace}`;
        const newWindow=window.open(url,'name','height=600,width=600');
        newWindow?.postMessage(JSON.stringify({obj: window}),'*')
        // @ts-ignore
        if (window.focus()) {
            newWindow?.focus()
        }
        return false;
    }
    const logout = () => {
        Cookie.set("cookie", "");
        Cookie.set("address", "");
        setAddress(undefined)
    }

    return { logout, address, client, login, wallet}
}
export default useConnectWallet