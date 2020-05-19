import React from "react";


class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="idProductCard">
        {this.props.title}
      </div>
    );
  }
}

export default ProductCard;
