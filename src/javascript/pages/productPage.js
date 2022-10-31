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
      const productDetailLink = document.createElement('a')
      productDetailLink.href = `/detail/${item.id}`
      productDetailLink.innerHTML = `
        // <li>
        //   <div class="product-img">
        //     <img src="http://test.api.weniv.co.kr/${item.thumbnailImg}" alt="" >
        //   </div>
        //   <strong class="product-name">${item.productName}</strong>
        //   <div class="product-price">
        //     <strong class="price m-price">${item.price}</strong>
        //   </div>
        // </li>
      `
      productList.append(productDetailLink)
    })

  }
  
  render(){
    // const container = document.createElement('div')
    // const el = document.createElement('h1')
    // el.innerText = '상품목록 페이지 입니다.'

    // const anchor1 = document.createElement('a')
    // anchor1.href = '/detail/1'
    // anchor1.innerText = ' 1 상세피이지 이동'

    // container.appendChild(anchor1)
    // container.append(el)
    
    // const anchor2 = document.createElement('a')
    // anchor2.href = '/detail/2'
    // anchor2.innerText = '2 상세피이지 이동'

    // container.appendChild(anchor2)
    // container.append(el)

    // const anchor3 = document.createElement('a')
    // anchor3.href = '/detail/3'
    // anchor3.innerText = '3 상세피이지 이동'

    // container.appendChild(anchor3)
    // container.append(el)
    this.setProductList()
    return this.mainElement
  }
}

export default ProductPage