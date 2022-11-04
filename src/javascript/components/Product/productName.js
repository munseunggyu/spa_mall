import Component from "../../core/Component.js";

class ProductName extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const productName = document.createElement('strong')
    productName.setAttribute('class', 'product-name')
    productName.innerText = this.props.name

    return productName
  }
}

// class ProductName{ // 비교 
//   constructor(name){
//     this.name = name
//   }

//   render(){
//     const productName = document.createElement('strong')
//     productName.setAttribute('class', 'product-name')
//     productName.innerText = this.name

//     return productName
//   }
// }

export default ProductName