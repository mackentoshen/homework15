import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import './HomeSalesCard.css';
import HomeChartConf from '../../config/HomeChartConf';


class HomeSalesCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            salesData: []
        }
    }

    componentWillMount() {
        fetch('/api/sales/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    salesData: res
                });
                let salesArr = this.state.salesData;
                let sum = 0;
                for (let index in salesArr) {
                    for (let salesArrIndex in salesArr[index]) {
                        sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                            salesArr[index][salesArrIndex] : 0;
                    }
                }
                let chart = this.salesChart.getChart();
                chart.series[0].setData(this.state.salesData, true);
                chart.setTitle({text: sum});
            });

    }

    handleChange = (e) => {
        if (e.target.value === 'Last year') {
            fetch('/api/sales/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        salesData: res
                    });
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.redraw();
                    chart.setTitle({text: sum});
                });
        }
        else if (e.target.value === 'Last month') {
            fetch('/api/sales/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        salesData: res
                    });
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.setTitle({text: sum});
                });
        }
        else if (e.target.value === 'Last week') {
            fetch('/api/sales/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        salesData: res
                    });
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.setTitle({text: sum});
                });
        }
    };

    render() {
        return (
            <div className="HomeSalesCard">
                <div className="HomePanel">
                    <p className="HomePanel-Title">Sales</p>
                    <select onChange={this.handleChange}>
                        {
                            this.props.data && this.props.data.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <ReactHighcharts config={HomeChartConf.SalesChart} ref={(chart) => {
                    this.salesChart = chart;
                }}/>
            </div>
        )
    }
}

export default HomeSalesCard;