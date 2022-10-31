class ProductDetail{
  constructor(id){
    this.id = id
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

    return container
  }
}

export default ProductDetail