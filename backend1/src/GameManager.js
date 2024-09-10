import { Game } from "./Game.js"
import { MOVE } from "./messages.js"
import { WebSocket } from "ws"


export class GameManager{

    
    /**
     * 
     * @type {Array<Game>}
     * @private
     */
    #games
    /**
     * @private
     * @type {WebSocket} 
     *
     */
    #pendingUser
     /**
     * @private
     * @type {WebSocket} 
     *
     */
    #users

    constructor(){
        this.#games =[]
        this.#users = []
        this.#pendingUser = null
    }
    /**
     * @param {WebSocket} socket
     *
     */
    addUser(socket){

        this.#users.push(socket)
        this.#addHandler(socket)

    }

    /**
     * @param {WebSocket} socket
     *
     */
    removeUser(socket){
        this.#users = this.#users.filter(user=>user!==socket)

    }
    /**
     * 
     * @param {WebSocket} socket 
     */
    #addHandler(socket){
        socket.on("message",(data)=>{
            const message = JSON.parse(data.toString())
            if(message.type === "init_game"){
                if(this.#pendingUser){
                    const game = new Game(this.#pendingUser,socket)
                    this.#games.push(game)
                    this.#pendingUser= null

                }else{
                    this.#pendingUser = socket
                }
            }
            if(message.type === MOVE){
                const game = this.#games.find(game=>game.player1 === socket || game.player2 === socket)
                // console.log(true)
                if(game){
                    game.makeMove(socket,message.move)
                }
            }
            
        })


    }


}