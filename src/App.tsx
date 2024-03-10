import { useState } from 'react'
import './App.css'

interface ProgressProps {
  current: number;
  total: number
}

function Progress({current,total}: ProgressProps){
  const width = total <= current ? 100 :  current / total * 100
 return <div
  style={{
    background:'#eee',
    height: '10px',
    borderRadius: '10px',
    overflow:'hidden'
  }}
  >
    <div style={{
      width: `${width}%`,
      height:'100%',
      background:'#6D326D'
    }}></div>
  </div>

}

enum GAME_STATE {
  GIVE_UP,
  ANGER,
  PLAY,
  WIN
}

const TARGET = 100_000
function App() {
  const [count, setCount] = useState(0)
  const [gameState,setGameState] = useState<GAME_STATE>(GAME_STATE.PLAY)
  const [total,setTotal] = useState(TARGET)

  let imgURL:string | undefined
  switch (gameState) {
    case GAME_STATE.PLAY:
      imgURL="https://www.cartier.com/variants/images/44733502651435010/img1/w1242_tpadding12.jpg"
      break;
    case GAME_STATE.ANGER:
      imgURL="https://media.tenor.com/pZR1wz2VO9AAAAAj/bubududu-panda.gif"
      break;
    case GAME_STATE.GIVE_UP: 
    imgURL="https://media.tenor.com/2xQbQ7BddhkAAAAj/tkthao219-bubududu.gif"
      break

    case GAME_STATE.WIN:
      imgURL= "https://media.tenor.com/WoY8ETlvYPoAAAAj/tkthao219-bubududu.gif"
      break
    default:
      imgURL ="https://www.cartier.com/variants/images/44733502651435010/img1/w1242_tpadding12.jpg"
      break;
  }

  if (count >= total && gameState !== GAME_STATE.WIN) {
    setGameState(GAME_STATE.WIN)
  }

  return (
    <div>
      <div>{GAME_STATE.WIN === gameState ? 'You Win!' : `${count}/${total}`}</div>
      <div style={{paddingBottom:'10px'}}> <Progress current={count} total={total} /></div>
      <div style={{
        height: "100px",
        display:"flex",
        justifyContent:"center",
      }}>
      <img style={{
        height:"100%",

      }} src={imgURL} alt="cartier watch" />
      </div>
      <div style={{display:'flex',justifyContent:'center', padding:'10px 0'}}>
      <button onClick={()=>{
        setCount(count+1)
        setGameState(GAME_STATE.PLAY)
      }}>🐼</button>
      <button onClick={()=>setGameState(GAME_STATE.GIVE_UP)}>😔</button>
      <button onClick={()=>{
        setGameState(GAME_STATE.ANGER)
        setTotal(total - 10000)
      }}>😡</button>
      </div>
    </div>
  )
}

export default App
