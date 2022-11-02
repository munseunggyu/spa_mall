export default class ProductItem{
  constructor(item){
    this.item = item
  }
  render(){
    const productItem = document.createElement('li')

    const productCard = document.createElement('a')
    productCard.setAttribute('href', `/detail/${this.item.id}`)
    productCard.setAttribute('class', 'product-item')

    const productImageContainer = document.createElement('div')
    productImageContainer.setAttribute('class', 'product-img')

    const productImage = document.createElement('img')
    productImage.setAttribute('src', `http://test.api.weniv.co.kr/${this.item.thumbnailImg}`)
    productImage.setAttribute('alt', '')

    const productName = document.createElement('strong')
    productName.setAttribute('class', 'product-name')
    productName.innerText = this.item.productName

    const productPriceContainer = document.createElement('div')
    productPriceContainer.setAttribute('class', 'product-price')

    const productPrice = document.createElement('strong')
    productPrice.setAttribute('class', 'price m-price')
    productPrice.innerText = this.item.productPrice
    
    const productType = document.createElement('span')
    productType.innerText = '원'

    productImageContainer.appendChild(productImage)

    productPrice.appendChild(productType)
    productPriceContainer.appendChild(productPrice)

    productCard.appendChild(productImageContainer)
    productCard.appendChild(productName)
    productCard.appendChild(productPriceContainer)

    productItem.appendChild(productCard)

    return productItem
  }
}