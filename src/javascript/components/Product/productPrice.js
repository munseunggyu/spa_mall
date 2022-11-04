class ProductPrice{
  constructor(productPrice,discount){
    this.productPrice = productPrice
    this.discount = discount
    this.preDiscountPrice = 0
  }

  render(){
    const productPriceContainer = document.createElement('div')
    productPriceContainer.setAttribute('class', 'product-price')
    
    const productPrice = document.createElement('strong')
    productPrice.setAttribute('class', 'price m-price')
    
    const priceType = document.createElement('span')
    priceType.innerText = '원'

    productPriceContainer.appendChild(productPrice)

    if(this.discount){
      const discountRateContainer = document.createElement('div')
      discountRateContainer.setAttribute('class','price-discount')
      
      
      const originPrice = document.createElement('strong')
      originPrice.setAttribute('class','price-strikethrough')
      originPrice.innerText = this.productPrice
      
      this.productPrice = this.productPrice - this.productPrice*(0.01*this.discount)
      
      const discountRateDisplay = document.createElement('strong')
      discountRateDisplay.setAttribute('class','discount-rate')
      discountRateDisplay.innerText = this.discount + '%'
      
      discountRateContainer.appendChild(originPrice)
      discountRateContainer.appendChild(priceType.cloneNode(true))
      discountRateContainer.appendChild(discountRateDisplay)
      productPriceContainer.appendChild(discountRateContainer)
    }

    productPrice.innerText = this.productPrice

    productPrice.appendChild(priceType)

    return productPriceContainer
  }
}

export default ProductPrice