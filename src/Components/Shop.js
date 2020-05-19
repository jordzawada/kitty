import React from "react";
import products from './productsInfoList.json';
import ProductCard from "./ProductCard.js";

let list1 = products
console.log(list1[0]);


class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cards: [],
    };
  }

  makeCards=()=>{
      let size = list1.length-1;
      let newCards = [];
      for (let i=0;i<size;i++){
        newCards.push(<ProductCard title={list1[i].title} key={i} />)
      }
      this.setState({cards: newCards})  
  }

  componentDidMount(){
      this.makeCards();
  }


//needs a sort, grid/list view
  render() {
    return (
        <div>
        <h2>Products</h2>
      <div id="idShopBox">
        {this.state.cards}
      </div>
      </div>
    );
  }
}

export default Shop;
