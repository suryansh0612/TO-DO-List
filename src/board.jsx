// import { useState } from "react"

// export default function Board() {
//     let [BlueMovecount, setBlueMovecount] = useState(0)
//     let [YellowMovecount, setYellowMovecount] = useState(0)
//     let [GreenMovecount, setsetGreenMovecount] = useState(0)
//     let [RedMovecount, setRedMovecount] = useState(0)
//     let newbluemove = () =>
//         setBlueMovecount(BlueMovecount + 1)
//     let newyellowmove=()=>
//         setYellowMovecount(YellowMovecount + 1)
    
//     let newgreenmove=()=>setsetGreenMovecount(GreenMovecount + 1)
//     let newredmove=()=>setRedMovecount(RedMovecount + 1)
//     return (
//         <div>
//             <h1>Game begins!</h1>
//             <div>
//                 <p>Blue moves = {BlueMovecount}</p>
//                 <button onClick={newbluemove} style={{ backgroundColor: "blue" }}>+1</button>
//                 <p>Yellow moves = {YellowMovecount}</p>
//                 <button onClick={newyellowmove} style={{ backgroundColor: "yellow" }}>+1</button>
//                 <p>Green moves = {GreenMovecount}</p>
//                 <button onClick={newgreenmove} style={{ backgroundColor: "green" }}>+1</button>
//                 <p>Red moves = {RedMovecount}</p>
//                 <button onClick={newredmove} style={{ backgroundColor: "red" }}>+1</button>
//             </div>
//         </div>
//     )
// }


import { useState } from "react"

export default function Board() {
let [moves, setmoves] = useState({blue:0, red:0, yellow:0, green:0})

let updateblue=()=>{
    
    console.log(`moves.blue ${moves.blue}`)
    setmoves({...moves, blue:moves.blue+1})// isska mtlb ki blue wali key hai usski value hona chahiye moves.blue+1 k eql
    
}
let updateyellow=()=>{
    
    console.log(`moves.yellow ${moves.yellow}`)
    setmoves({...moves, yellow:moves.yellow +1})
    
}
let updategreen=()=>{
    
    console.log(`moves.green ${moves.green}`)
    setmoves({...moves, green:moves.green +1})
    
}
let updatered=()=>{
    
    console.log(`moves.red ${moves.red}`)
    setmoves({...moves, red:moves.red +1})
    
}
    return (
        <div>
            <h1>Game begins!</h1>
            <div>
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateblue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                 <button style={{ backgroundColor: "yellow" }}onClick={updateyellow}>+1</button>
                 <p>Green moves = {moves.green}</p>
                 <button style={{ backgroundColor: "green" }}onClick={updategreen}>+1</button>
                <p>Red moves = {moves.red}</p>
            <button style={{ backgroundColor: "red" }}onClick={updatered}>+1</button>
            </div>
        </div>
    )
}


