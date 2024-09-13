import { useEffect, useState } from "react"
const WS_URL = "ws://localhost:8000"

export const useSocket=()=>{
    const [socket,setSocket] = useState<WebSocket | null>(null)
    useEffect(()=>{
        const ws = new WebSocket(WS_URL)
        ws.onopen=()=>{
            console.log("Connected")
        }
        ws.onclose=()=>{
            console.log("Disconnected")
        }
        setSocket(ws)
        return ()=>{
            ws.close()
        }
    },[])
}