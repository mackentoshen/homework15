import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import './HomeActiveSales.css';
import HomeChartConf from '../../config/HomeChartConf';

class HomeActiveSales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reportData: []
        }
    }

    componentWillMount() {
        fetch('/api/report/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    reportData: res
                });
                let chart = this.reportChart.getChart();
                chart.series[0].setData(this.state.reportData, true);
            });
    }

    handleChange = (e) => {
        if (e.target.value === 'Last year') {
            fetch('/api/report/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        reportData: res
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
                });
        }
        else if (e.target.value === 'Last month') {
            fetch('/api/report/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        reportData: res
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
                });
        }
        else if (e.target.value === 'Last week') {
            fetch('/api/report/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        reportData: res
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
                });
        }

    };

    render() {
        return (
            <div className="HomeActiveSales">
                <div className="HomePanel">
                    <p className="HomePanel-Title">Report</p>
                    <select onChange={this.handleChange}>
                        {
                            this.props.data && this.props.data.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <ReactHighcharts config={HomeChartConf.ReportChart} ref={(chart) => {
                    this.reportChart = chart;
                }}/>
            </div>
        )
    }
}

export default HomeActiveSales;