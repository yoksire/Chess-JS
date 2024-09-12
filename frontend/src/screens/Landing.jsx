export const Landing =()=>{
    return <div>
        <div className="mt-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                <div>
                    <img src={"/chess-board.jpeg"} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Welcome to Chess</h1>
                    <p className="mt-4">Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid. The game is played by millions of people worldwide. Chess is believed to be derived from the Indian game chaturanga sometime before the 7th century. Chaturanga is also the likely ancestor of the Eastern strategy games xiangqi, janggi, and shogi. Chess reached Europe by the 9th century, due to the Umayyad conquest of Hispania. The pieces assumed their current powers in Spain in the late 15th century; the rules were finally standardized in the 19th century.</p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Play Chess</button>
                </div>
            </div>
        </div>
    </div>
}