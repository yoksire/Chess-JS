import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"

export const Landing =()=>{
    const navigate= useNavigate()
    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                <div className="flex justify-center ">
                    <img src={"/chess-board.jpeg"} alt="chessboard" 
                    className="max-w-96"/>
                </div>
                <div>
                    <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-white">Welcome to ChessJS</h1>
                    </div>
                    <div className="flex justify-center">
                    <p className="mt-4 text-slate-400">Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid. The game is played by millions of people worldwide. Chess is believed to be derived from the Indian game chaturanga sometime before the 7th century. Chaturanga is also the likely ancestor of the Eastern strategy games xiangqi, janggi, and shogi. Chess reached Europe by the 9th century, due to the Umayyad conquest of Hispania. The pieces assumed their current powers in Spain in the late 15th century; the rules were finally standardized in the 19th century.</p>
                    </div>
                    <div className="mt-4 flex justify-center">
                    <Button onClick={()=>{navigate('/game')}}>
                        Play Online
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}