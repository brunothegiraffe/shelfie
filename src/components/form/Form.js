import React, { Component } from 'react';

export default class Form extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            img_url: '',
        }
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleName(value){
        this.setState({ name: value })
    }
    handlePrice(value){
        this.setState({ price: value })
    }
    handleImage(value){  
        this.setState({ img_url: value })
    }
    handleCancel(){
        this.setState({
            name: '',
            price: 0,
            img_url: ''
        })
    }
    render(){
        return(
            <div>
                <h1>Form</h1>
                <img src='' alt='' />
                <p>Image URL:</p>
                <input 
                    type='text'
                    onChange={ e => this.handleImage( e.target.value ) }
                    name='img_url'
                />
                <p>Product Name:</p>
                <input 
                    type='text'
                    onChange={ e => this.handleName( e.target.value ) }
                    name='name'
                />
                <p>Price:</p>
                <input 
                    type='text'
                    onChange={ e => this.handlePrice( e.target.value ) }
                    name='price'
                />
                <button
                    onClick={ this.handleCancel }
                >Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}