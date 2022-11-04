import Component from "../../core/Component.js"

class ProductImage extends Component{

  render(){
    const productImageContainer = document.createElement('div')
    productImageContainer.setAttribute('class', 'product-img')

    const productImage = document.createElement('img')
    productImage.setAttribute('src', `http://test.api.weniv.co.kr/${this.props.src}`)
    productImage.setAttribute('alt', '')
    productImageContainer.appendChild(productImage)

    return productImageContainer
  }
}

export default ProductImage