import { Card, Divider, Grid, List, ListItem, ListItemButton, ListItemText, styled, Table, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PaymentResponseTable: React.FC = () => {
    const cardState = useSelector((state: RootState) => state.payment.card)
    const balanceState = useSelector((state: RootState) => state.payment.balance)

    return (
        <Grid container spacing={8} justifyContent="center">
            <Grid item xs={3}>
                <Typography variant="h4">Balance</Typography>
                <TableContainer component={Card}>
                <Table>
                    <TableRow>
                        <TableCell variant="head">Non-snap</TableCell>
                        <TableCell>{balanceState.non_snap}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">Snap</TableCell>
                        <TableCell>{balanceState.snap}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">Updated</TableCell>
                        <TableCell>{new Date(balanceState.updated).toLocaleDateString("en-us")}</TableCell>
                    </TableRow>
                </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={3}>
            <Typography variant="h4">Card</Typography>
                <TableContainer component={Card}>
                <Table>
                    <TableRow>
                        <TableCell variant="head">last4</TableCell>
                        <TableCell>{cardState.last4}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">token</TableCell>
                        <TableCell>{cardState.token}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">Type</TableCell>
                        <TableCell>{cardState.type}</TableCell>
                    </TableRow>
                </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default PaymentResponseTable