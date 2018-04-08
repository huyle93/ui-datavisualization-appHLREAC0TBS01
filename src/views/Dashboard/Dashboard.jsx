import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import {Doughnut, Radar, Bar} from 'react-chartjs-2';
import { Grid, Row, Col, Table } from 'react-bootstrap';


import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import {Tasks} from 'components/Tasks/Tasks.jsx';
import {thArray, tdArray} from 'variables/Tables.jsx';
import {iconsArray} from "variables/Icons.jsx";

import {
    dataRadar,
    radarOptions,
    dataPie,
    pieOptions,
    legendPie,
    dataSales,
    optionsSales,
    listener,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    pluginsBar,
    legendBar
} from 'variables/Charts.jsx';
import TableList from '../TableList/TableList';

class Dashboard extends Component {
    createLegend(json){
        var legend = [];
        for(var i = 0; i < json["names"].length; i++){
            var type = "fa fa-circle text-"+json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={3}/>
                    </Row>
                    <Row>
                        <Col lg={4} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-user text-warning"></i>}
                                statsText="Recommended Attorney"
                                statsValue="Paul S. Gillies"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-hammer text-success"></i>}
                                statsText="Winning Chance"
                                statsValue="83%"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={5} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-medal text-danger"></i>}
                                statsText="Winning Chance against Judge Thomas Durkin"
                                statsValue="92%"
                                statsIcon={<i className="fa fa-clock-o"></i>}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        {/* <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-twitter text-info"></i>}
                                statsText="Followers"
                                statsValue="+45"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col> */}
                    </Row>
                    {/* CHART */}
                    <Row>
                        <Col md={7}>
                            <Card
                                id="chartActivity"
                                title="Top 10 Attorney"
                                category="Attorney againt Judge Thomas Durkin"
                                stats="Updated 2 minutes ago"
                                statsIcon="fa fa-check"
                                content={
                                    <div className="ct-chart">
                                        <Bar
                                            data={dataBar}
                                            options={optionsBar}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendBar)}
                                    </div>
                                }
                            />
                            {/* <Card
                                statsIcon="fa fa-clock-o"
                                title="Email Statistics"
                                category="Last Campaign Performance"
                                stats="Campaign sent 2 days ago"
                                content={
                                    <div id="chartPreferences" className="ct-chart ct-perfect-fourth">
                                        <ChartistGraph 
                                            listener={listener}
                                            data={dataPie} 
                                            type="Pie"
                                            options={pieOptions}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendPie)}
                                    </div>
                                }
                            /> */}
                        </Col>
                        <Col md={5}>
                            <Card 
                            statsIcon="fa fa-history"
                            id="chartHours"
                            title="Attorney's Niche"
                            category="Data since 2000"
                            stats="Updated 2 minutes ago"
                            legend={
                                <div className="legend">
                                    {this.createLegend(legendBar)}
                                </div>
                            }
                   content={
                                <div id="chartPreferences" className="ct-chart">
                                    <Radar className="chart-container" data={dataRadar} options={pieOptions} />
                                </div>
                            }
                            />
                            {/* <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            listener={listener}
                                            data={dataSales}
                                            type="Line"
                                            options={optionsSales}
                                            responsiveOptions={responsiveSales}
                                        />
                                    </div>
                                    }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendSales)}
                                    </div>
                                }
                            /> */}
                        </Col>
                    </Row>

                    <Row>
                        <Col md={7}>
                            <Card 
                            statsIcon="fa fa-hourglass-2"
                            title="Similar Attorney"
                            category="Compare to Recommended Attorney "
                            stats="Updated a week ago"
                            content={
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            {
                                                thArray.map((prop, key) => {
                                                    return (
                                                    <th  key={key}>{prop}</th>
                                                    );
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tdArray.map((prop,key) => {
                                                return (
                                                    <tr key={key}>{
                                                        prop.map((prop,key)=> {
                                                            return (
                                                                <td  key={key}>{prop}</td>
                                                            );
                                                        })
                                                    }</tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            }
                            />
                        </Col>
                        <Col md={5}>
                            <Card 
                            statsIcon="fa fa-clock-o"
                            title="Probability Distribution"
                            category="Paul S. Gillies"
                            stats="Updated 2 minutes ago"
                            content={
                                <div id="chartPreferences" className="ct-chart ct-perfect-fourth">
                                    <Doughnut className="chart-container" data={dataPie} options={pieOptions} />
                                </div>
                            }
                            />
                            {/* <Card
                                title="Tasks"
                                category="Backend development"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                }
                            /> */}
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default Dashboard;