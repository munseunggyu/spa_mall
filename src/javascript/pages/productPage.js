class ProductPage{
  render(){
    const container = document.createElement('div')
    const el = document.createElement('h1')
    el.innerText = '상품목록 페이지 입니다.'

    const anchor = document.createElement('a')
    anchor.href = './detail'
    anchor.innerText = '상세피이지 이동'

    container.appendChild(anchor)
    container.append(el)
    return container
  }
}

export default ProductPage