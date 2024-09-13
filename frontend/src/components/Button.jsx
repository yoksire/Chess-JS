export const Button =({onClick,children})=>{
    return  <button onClick={onClick} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 text-2xl rounded">{children}</button>

}