import { Chess } from "chess.js"
import { ChessBoard } from "../components/ChessBoard"
import { Button } from "../components/Button"
import { Navigate, useNavigate } from "react-router-dom"

export const Game =()=>{
    const navigate= useNavigate()
    return <div className="justify-center flex">
        <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 ">
            <div className="col-span-4 justify-center flex bg-red-200 w-full">
                <ChessBoard/>
            </div>
            <div className="col-span-2 justify-center flex bg-green-200 w-full">
            <Button onClick={()=>{navigate('/game')}}>
                        Play
                    </Button>
            </div>
        </div>
        </div>
    </div>
}