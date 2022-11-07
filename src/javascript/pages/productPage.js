import { ProductCard } from "../components/ProductCard/index.js"

class ProductPage{
  constructor(){
    this.mainElement = document.createElement('main')
    this.product = {}
  }

  async getProductData(){
    const response = await fetch('http://test.api.weniv.co.kr/mall')
    const data = await response.json()
    
    this.product = await data
  }

  async setProductList(){
    await this.getProductData()
    this.mainElement.classList.add('product')

    const productPageHeader = document.createElement('h1')
    productPageHeader.setAttribute('class','ir')
    productPageHeader.textContent = '상품목록 페이지입니다.'

    const productList = document.createElement('ul')
    productList.setAttribute('class','product-list')
    // test
    const test = document.createElement('a')
    test.setAttribute('href','/testPage')
    // test.setAttribute('class','ir')
    test.setAttribute('class','test')

    test.innerText = 'test'
    productList.appendChild(test)

    this.mainElement.appendChild(productPageHeader)

    this.product.forEach(item => {
      const productItem = document.createElement('li')
      productItem.setAttribute('class','product-item')

      const productCard = new ProductCard(item)
      productItem.appendChild(productCard.render())
      productList.appendChild(productItem)
    })
    this.mainElement.appendChild(productList)
  }
  
  render(){
    this.setProductList()
    return this.mainElement
  }
}

export default ProductPage