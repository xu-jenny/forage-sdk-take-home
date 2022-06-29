import React from "react";

export interface PaymentResponse {
    balance: {
        non_snap: string,
        snap: string,
        updated: string
    },
    card: {
        last4: string,
        token: string,
        type: CardType | null,
    }
}

enum CardType {
    EBT = "ebt"
}