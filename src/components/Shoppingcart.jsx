import React, { Component } from 'react'

  class Shoppingcart extends Component {

    constructor() {
        super();

        this.state = {
            items: [
                {
                    //ITEM1
                    quantity: 0,
                    price: 5,
                    name: "Cheese dogs"
                },
                {
                    //ITEM2
                    quantity: 0,
                    price: 69.95,
                    name: "Diablo 4"
                }
            ],

            cartSubTotal: 0,
            tax: 0.07,
            total: 0,
        }
    
    }
    // Components
    addQuantity = index => {
        this.setState(
            {
        quantity: this.state.items[index].quantity ++
        }
    )
}

    subtractQuantity = index => {
        this.setState(
            {
        quantity: this.state.items[index].quantity --
        }
    )
}

    render() {

        //items
        let cheeseDog = this.state.items[0];
        let Diablo = this.state.items[1];
        
        //Calculations 
        let itemTotalCount = cheeseDog.quantity + Diablo.quantity;
        let cheeseDogCount = cheeseDog.quantity;
        let DiabloCount = Diablo.quantity;
        let cartSubTotal = Math.floor((cheeseDogCount * cheeseDog.price) + (DiabloCount * Diablo.price));
        let tax = (cartSubTotal * this.state.tax).toFixed(2);

        // Total
        let total = Math.floor(tax + cartSubTotal);
        
        return (
            <div className="wrapper">
                <div className="items">
                    <div className="firstItem">
                        <h2>Item name:</h2>
                        <p>{cheeseDog.name}</p>
                        <h4>Quantity: {cheeseDog.quantity}</h4>
                        <button onClick={() =>this.subtractQuantity(0)}>-</button> 
                        <button onClick={() =>this.addQuantity(0)}>+</button>
                        <h4>Price: ${cheeseDog.price}</h4>
                        
                    </div>
                    <div className="secondItem">
                        <h2>Item name:</h2>
                        <p>{Diablo.name}</p>
                        <h4>Quantity: {Diablo.quantity}</h4>
                        <button onClick={() =>{this.subtractQuantity(1)}}>-</button>
                        <button onClick={() =>{this.addQuantity(1)}}>+</button>
                        <h4>Price: ${Diablo.price}</h4>
                    </div>
                </div>
                    <div className="checkOut">
                        <h2>{itemTotalCount}</h2>
                        <h1>${cartSubTotal}</h1>
                        <h2>Tax: ${tax}</h2>
                        <h1>Total: ${total}</h1>
                    </div>
            </div>
        )
    }
  }
export default Shoppingcart;

