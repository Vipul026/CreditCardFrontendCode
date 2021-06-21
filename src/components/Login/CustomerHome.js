import React, { Component } from 'react'
import axios from 'axios'
import Navigation from './Navigation'


 class CustomerHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:sessionStorage.getItem('username'),
            
        }
    }
    
   componentDidMount(){
    const URL = `http://localhost:9090/creditCard/getAllCreditCards/${this.state.username}`;
    axios
        .get(URL)
        .then((response) => {
          let info=response.data
            console.log(response.data);
            info.map((creditCard)=>{
                sessionStorage.setItem('cardNumber',creditCard.cardNumber)
            })
            
        })
        .catch((error) => console.log(error.message));
       
   } 
    render() {
        return (
            <div>
                <Navigation/>
                <h2 style={{textAlign:'left',color:'white',fontWeight:'bolder',backgroundColor:'black',width:'200px'}}>Hello {this.state.username}</h2>
                <h3 style={{fontSize:"200%", color:"Black"}}>Welcome To Credit Card Payment System</h3>
                <div className="logo">      
                <img src={"https://picjumbo.com/wp-content/uploads/purchasing-a-product-with-credit-card-on-e-commerce-online-store-1080x720.jpg"} width="600" height="350" />
                </div>
            </div>
        )
    }
}

export default CustomerHome
