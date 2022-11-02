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
    this.mainElement.innerHTML = `
      <h1 class='ir'>상품목록 페이지입니다.</h1>
      <ul class='product-list'> </ul> 
    `
    const productList = this.mainElement.querySelector('.product-list')

    this.product.forEach(item => {
      const productCard = new ProductCard(item)
      productList.append(productCard.render())
    })
  }
  
  render(){
    this.setProductList()
    return this.mainElement
  }
}

export default ProductPage