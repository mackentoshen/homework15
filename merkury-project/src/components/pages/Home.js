import React , { Component } from 'react';
import './Home.css';
import HomeActiveSales from "../organisms/HomeActiveSales";
import HomeSalesCard from "../organisms/HomeSalesCard";

const periodOfSales = ['Last year', 'Last month', 'Last week'];
const username = localStorage.getItem('username');

class Home extends Component {
    render() {
        return (
            <section className="HomePage">
                <h3>Hello {username}!</h3>
                <div className="HomePageFlex">
                    <HomeSalesCard data={periodOfSales}/>
                    <HomeActiveSales data={periodOfSales}/>
                </div>
            </section>
        )
    }
}

export default Home;