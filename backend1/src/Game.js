import {Chess} from 'chess.js'
import { GAME_OVER, INIT_GAME, MOVE } from './messages.js'
import { WebSocket } from 'ws'

export class Game{
    player1
    player2
    #board
    #startTime

    constructor(player1,player2){
        this.player1=  player1
        this.player2 = player2
        this.#board = new Chess()
        this.#startTime = new Date()
        this.player1.send(JSON.stringify({type:INIT_GAME,payload:{color:"white"}}))
        this.player2.send(JSON.stringify({type:INIT_GAME,payload:{color:"black"}}))
    }
    makeMove(socket,move){
        if(this.#board.moves.length === 0&& this.player1 !== socket){
            return
        }
        if(this.#board.moves.length % 2 === 1 && this.player1 !== socket){
            return
        }
        try{
            this.#board.move(move)
        }catch(e){
            console.log(e)
            return
        }
        if(this.#board.isGameOver()){
            this.player1.send("message",JSON.stringify({type:GAME_OVER,payload:{winner:this.#board.turn() === "w"? "black":"white"}}))
        }
        console.log("1")
        if(this.#board.moves.length % 2 === 0){
            console.log("1")
            this.player2.send(JSON.stringify({type:MOVE,payload:{move:move}}))
        }else{
            this.player1.send(JSON.stringify({type:MOVE,payload:{move:move}}))
        }
         
    }
}