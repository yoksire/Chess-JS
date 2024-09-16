

export const ChessBoard = ({board}) => {
    return <div className="text-white-200">
        {board.map((row, i) => {
            return <div className="flex" key={i}>
                {row.map((square, j) => {
                    return <div key={j} className={`w-16 h-16 ${(i+j)%2===0 ? 'bg-green-500':'bg-green-300'}`}>
                        {square ? square.type : ''}
                    </div>
                })}
            </div>
        })}
    </div>
}