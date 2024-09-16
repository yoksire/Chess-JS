import { useState } from "react"


export const ChessBoard = ({board,socket}) => {
    const [from,setFrom] = useState(null)
    const [to,setTo] = useState(null)   
    return <div className="text-white-200">
        {board.map((row, i) => {
            return <div className="flex" key={i}>
                {row.map((square, j) => {
                    return <div key={j} className={`w-16 h-16 ${(i+j)%2===0 ? 'bg-slate-creme':'bg-amber-700'}`}>
                        <div className="w-full justify-center flex h-full">
                            <div className="h-full justify-center flex flex-col">
                            {square ? square.type : ''}
                            </div>

                        </div>
                        
                    </div>
                })}
            </div>
        })}
    </div>
}