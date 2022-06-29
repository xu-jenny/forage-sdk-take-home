import React, { useState } from "react";

import { PaymentResponse } from "../utils/types";

const PaymentResponseTable:React.FC<PaymentResponse> = ({balance, card}) => {
    return (
        <>
            <h3>Your Payment Response</h3>
            <ul>Balance</ul>
            <span>Snap: {balance.snap}</span><br />
            <span>Non-Snap: {balance.non_snap}</span><br />
            <span>Last updated: {balance.updated}</span><br />
            <h5>Card</h5>
            <span>Last4: {card.last4}</span><br />
            <span>Token: {card.token}</span><br />
            <span>Type: {card.type}</span><br />
        </>
    )
}

export default PaymentResponseTable