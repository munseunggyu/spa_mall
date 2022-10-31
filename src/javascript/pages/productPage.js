class ProductPage{
  constructor(){
    this.product = {}
  }



  render(){
    const container = document.createElement('div')
    const el = document.createElement('h1')
    el.innerText = '상품목록 페이지 입니다.'

    const anchor1 = document.createElement('a')
    anchor1.href = '/detail/1'
    anchor1.innerText = ' 1 상세피이지 이동'

    container.appendChild(anchor1)
    container.append(el)
    
    const anchor2 = document.createElement('a')
    anchor2.href = '/detail/2'
    anchor2.innerText = '2 상세피이지 이동'

    container.appendChild(anchor2)
    container.append(el)

    const anchor3 = document.createElement('a')
    anchor3.href = '/detail/3'
    anchor3.innerText = '3 상세피이지 이동'

    container.appendChild(anchor3)
    container.append(el)
    return container
  }
}

export default ProductPage