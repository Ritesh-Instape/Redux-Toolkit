import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../Redux/countslice'
import { increment,reset } from '../Redux/countslice'
import { RootState } from '../Redux/store'

function Count() {

    const dispatch = useDispatch()

    const count = useSelector((state:RootState)=>{
        return state.counter.value
    })




    function handleIncre(){
        dispatch(increment())
    }


    function handleDecre(){
        dispatch(decrement())
    }

    function handleReset(){
        dispatch(reset())
    }


  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleIncre}>+</button>
      <button onClick={handleDecre}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Count
