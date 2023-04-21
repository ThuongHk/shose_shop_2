import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

type Props = {}

function Card({}: Props) {

    const {listCard} = useSelector((state: RootState)=>state.cardSlice)
    console.log(listCard)
  return (
    <div>Card</div>
  )
}

export default Card