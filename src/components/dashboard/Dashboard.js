import React, { Component } from 'react';
import Product from '../product/Product';

export default class Dashboard extends Component{
    
    render(){
        let inventoryList = this.props.inventoryList.map((e, i) => {
            return(
                <Product 

                />
            )
        })
        return(
            <div>
                <h1>Dashboard</h1>
                { inventoryList }
            </div>
        )
    }
}