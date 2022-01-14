import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { buyCake } from "../redux"

const HooksCakeContainer = () => {
  const noOfCakes = useSelector((state) => {
    return state.noOfCakes
  })

  const dispatch = useDispatch()
  return (
    <div>
      <h2> No of Cakes- {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
