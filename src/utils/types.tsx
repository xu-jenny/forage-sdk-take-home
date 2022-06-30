import React from "react";

export enum InputVariant {
    OUTLINED = 'outlined',
    FILLED = 'filled',
    STANDARD = 'standard'
}

export interface PaymentCard {
    last4: string,
    token: string,
    type: CardType | null,
}
export interface PaymentBalance {
    non_snap: string,
        snap: string,
        updated: Date
}

export interface PaymentResponse {
    balance: PaymentBalance,
    card: PaymentCard
}

enum CardType {
    EBT = "ebt"
}