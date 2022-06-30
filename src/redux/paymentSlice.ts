import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PaymentBalance, PaymentCard, PaymentResponse } from "../utils/types";

const initialState: PaymentResponse = {
  balance: {
    non_snap: '',
    snap: '',
    updated: new Date('1990-12-17T03:24:00')
  },
  card: {
      last4: '',
      token: '',
      type: null,
  }
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<PaymentCard>) => {
      state.card = action.payload
    },
    setBalance: (state, action: PayloadAction<PaymentBalance>) => { 
      state.balance = action.payload 
    }
  },
})

export const { setCard, setBalance } = paymentSlice.actions

export default paymentSlice.reducer