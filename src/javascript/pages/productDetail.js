class ProductDetail{
  constructor(id){
    this.id = id
    this.product = {}
  }

  async getProductData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall/${this.id}`)
    const data = await response.json()

    this.product = await data
  }

  async setProductList(){
    await this.getProductData()
    console.log(this.product)
  }
  render(){
    const container = document.createElement('div')
    const el = document.createElement('h1')
    el.innerText = `${this.id} 상세 페이지 입니다.`

    const anchor = document.createElement('a')
    anchor.href = '/'
    anchor.innerText = '상품 목록 페이지로 이동'

    container.appendChild(anchor)
    container.append(el)
    this.setProductList()
    return container
  }
}

export default ProductDetail