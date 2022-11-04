import Component from "../../core/Component.js"

class ProductPrice extends Component{

  render(){
    const productPriceContainer = document.createElement('div')
    productPriceContainer.setAttribute('class', 'product-price')
    
    const productPrice = document.createElement('strong')
    productPrice.setAttribute('class', 'price m-price')
    
    const priceType = document.createElement('span')
    priceType.innerText = '원'

    productPriceContainer.appendChild(productPrice)

    if(this.props.discount){
      const discountRateContainer = document.createElement('div')
      discountRateContainer.setAttribute('class','price-discount')
      
      
      const originPrice = document.createElement('strong')
      originPrice.setAttribute('class','price-strikethrough')
      originPrice.innerText = this.props.productPrice
      
      this.props.productPrice = this.props.productPrice - this.props.productPrice*(0.01*this.props.discount)
      
      const discountRateDisplay = document.createElement('strong')
      discountRateDisplay.setAttribute('class','discount-rate')
      discountRateDisplay.innerText = this.props.discount + '%'
      
      discountRateContainer.appendChild(originPrice)
      discountRateContainer.appendChild(priceType.cloneNode(true))
      discountRateContainer.appendChild(discountRateDisplay)
      productPriceContainer.appendChild(discountRateContainer)
    }

    productPrice.innerText = this.props.productPrice

    productPrice.appendChild(priceType)

    return productPriceContainer
  }
}

export default ProductPrice