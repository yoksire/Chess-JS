import { Chess } from "chess.js"
import { ChessBoard } from "../components/ChessBoard"
import { Button } from "../components/Button"
import { Navigate, useNavigate } from "react-router-dom"
import { useSocket } from "../hooks/useSocket"
import { useEffect, useState } from "react"
import { set } from "mongoose"
//
export const INIT_GAME = "init_game"
export const MOVE = "move"
export const GAME_OVER = "game_over"

export const Game =()=>{
  
    // const navigate= useNavigate()
    const socket = useSocket()
    
    const [chess,setChess] = useState(new Chess())
    const [board,setBoard] = useState(chess.board())

    useEffect(()=>{
        if(!socket){
            return
        }
        
        socket.onmessage=(e)=>{
            const message = JSON.parse(e.data)
            console.log(message)
            switch(message.type){
                case INIT_GAME:
                    setChess(new Chess())
                    setBoard(chess.board())
                    console.log("Game Initialized")
                    break
                case MOVE:
                    const move =message.payload
                    board.move(move)
                    setBoard(chess.board())
                    console.log("Move")
                    break
                case GAME_OVER:
                    console.log("Game Over")
                    break
            }
    }},[socket])

    if(!socket){
        return <div>
            Connecting...
        </div>
    }
    return <div className="justify-center flex">
        <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 ">
            <div className="col-span-4 justify-center flex w-full">
                <ChessBoard board={board}/>
            </div>
            <div className="col-span-2  w-full">
            <Button onClick={()=>{socket.send(JSON.stringify({
                type:INIT_GAME
                
            }))
            }}>
                        Play
                    </Button>
            </div>
        </div>
        </div>
    </div>
}