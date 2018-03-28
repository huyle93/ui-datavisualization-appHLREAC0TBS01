import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// https://react-bootstrap.github.io/components/table/

export class AttorneyTable extends Component{
    render(){
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Attorney Name</th>
                        <th>Total Cases</th>
                        <th>Win Cases</th>
                        <th>Win Probability</th>
                        <th>Recommended Division</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark Huddleston</td>
                        <td>25</td>
                        <td>19</td>
                        <td>65%</td>
                        <td>Civil</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mike Klein</td>
                        <td>40</td>
                        <td>16</td>
                        <td>45%</td>
                        <td>Environmental</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Albert Einstent</td>
                        <td>20</td>
                        <td>16</td>
                        <td>42%</td>
                        <td>Civil</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default AttorneyTable;
