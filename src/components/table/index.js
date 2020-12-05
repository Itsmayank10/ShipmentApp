import React, { Component } from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TableComponent extends Component{
    render(){
        return(
            <TableContainer component={Paper}>
                <Table stickyHeader={true}  style={{minWidth: 650, paddingTop: "1%"}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>AWBNUMBER</TableCell>
                        <TableCell align="right">TRANSPORTER</TableCell>
                        <TableCell align="right">SOURCE</TableCell>
                        <TableCell align="right">DESTINATION</TableCell>
                        <TableCell align="right">BRAND</TableCell>
                        <TableCell align="right">START DATE</TableCell>
                        <TableCell align="right">ETD</TableCell>
                        <TableCell align="right">STATUS</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.tableDetails.map(row => (
                        <TableRow onClick={()=> {return this.props.setTimeLine(row._id)}} style={{cursor: "pointer"}}>
                        <TableCell component="th" scope="row">{row.awbno}</TableCell>
                        <TableCell align="right">{row.carrier}</TableCell>
                        <TableCell align="right">{row.from}</TableCell>
                        <TableCell align="right">{row.to}</TableCell>
                        <TableCell align="right">{row.order_data}</TableCell>
                        <TableCell align="right">{row.pickup_date}</TableCell>
                        <TableCell align="right">{row.extra_fields ? row.extra_fields.expected_delivery_date : '-'}</TableCell>
                    <TableCell align="right">{ row.current_status === "Delivered" ? <span style={{color: "green"}}>Delivered</span> :  <span style={{color: "red"}}>{row.current_status}</span>}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default TableComponent