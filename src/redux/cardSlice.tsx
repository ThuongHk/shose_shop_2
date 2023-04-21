import { createSlice } from '@reduxjs/toolkit'
import { ProductModel } from './productSlice';
import { ProductDetailModel } from './productDetailSlice';


export type StateCard = {
    listCard: ProductDetailModel[]
}

const initialState: StateCard = {
   listCard: []
}

const cardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {
    addCard: (state, action) =>{
      let listCardCapNhat = [...state.listCard]
      let findIndex = listCardCapNhat.findIndex(card => card.id === action.payload.id)
      if(findIndex != -1){
          listCardCapNhat.splice(findIndex, 1)
      }else{
        listCardCapNhat.push(action.payload)
      }
      state.listCard = listCardCapNhat
      console.log(state.listCard)
    }
  }
});

export const {addCard} = cardSlice.actions

export default cardSlice.reducer