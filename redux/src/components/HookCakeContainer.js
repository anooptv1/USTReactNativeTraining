import React from 'react'
import { buyCake } from '../redux'  
import { useSelector, useDispatch} from 'react-redux'

function HookCakeContainer() {
    const numOfCakes = useSelector( state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2> Hook Cakes - {numOfCakes} </h2>
            <button onClick={ () => dispatch(buyCake())}> Buy Cake </button>
        </div>
    )
}

export default HookCakeContainer
