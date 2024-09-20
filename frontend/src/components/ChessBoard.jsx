import { useState } from "react"
import { MOVE } from "../screens/Game"



export const ChessBoard = ({board,socket,setBoard,chess}) => {
    const [from,setFrom] = useState(null)
    const [to,setTo] = useState(null)   
    return <div className="text-white-200">
        {board.map((row, i) => {
            return <div className="flex" key={i}>
                {row.map((square, j) => {
                    const squareRep = String.fromCharCode(97 +(j%8))+""+(8-i)
                    // console.log(squareRep)
                    return <div onClick={()=>{
                        if(!from){
                            setFrom(square?.square ?? null)
                        }else{
                            socket.send(JSON.stringify({
                                type:MOVE,
                                payload:{
                                    move:{
                                        from ,
                                        to : squareRep
                                    }
                                    
                                }
                            }))
                            setFrom(null)
                            chess.move({
                                from,
                                to : squareRep
                            })
                            console.log(chess.board())
                            setBoard(chess.board())
                            console.log({from,to : squareRep})
                        }
                    }} key={j} className={`w-16 h-16 ${(i+j)%2===0 ? 'bg-slate-creme':'bg-amber-700'}`}>
                        <div className="w-full justify-center flex h-full">
                            <div className="h-full justify-center flex flex-col">
                            {square ? <img className="w-12" src={`/${square?.color==='b'?square?.type: `${square?.type}l`}.svg`}/>:null}
                            </div>

                        </div>
                        
                    </div>
                })}
            </div>
        })}
    </div>
}