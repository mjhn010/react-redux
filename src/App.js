
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state => state.count)
  const id = useSelector(state => state.id)
  const password = useSelector(state => state.password)
  const dispatch = useDispatch()

  const resetCount = () =>{
    dispatch({type:"RESET",payload:{num:0}})
  }

  const plusNum = (e)=>{
    if(count >= 100){
      console.log(count)
      alert("대단해요 100까지왔어요! 0부터 다시하세요")
      return dispatch({type:"RESET",payload:{num:0}})
    }else if(e.target.className == "five"){
      return dispatch({type:"FIVE INCREMENT",payload:{num:5}})
    }
    dispatch({type:"INCREMENT"})
  }
  const decrement = ()=>{
    if(count <= 0){
    return  alert("0보다 작을 수 없습니다.")
    }
    dispatch({type:"DECREMENT"})
  }
  const login = () => {
    dispatch({type:"LOGIN",payload:{id:"coding",password:"1234"}})
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>{id}{password}</h2>
      <button onClick={(e)=>plusNum(e,count)}>증가</button>
      <button className='five' onClick={(e)=>plusNum(e,count)}>5증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={decrement}>감소</button>
      <button onClick={resetCount}>초기화</button>
      <Box/>
    </div>
  );
}

export default App;
