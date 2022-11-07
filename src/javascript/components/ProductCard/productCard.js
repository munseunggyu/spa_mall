import {ProductImage, ProductPirce, ProductName,ProductLikeButton} from '../Product/index.js'

class ProductCard{
  constructor(item){
    this.item = item
  }
  render(){
    const product = document.createElement('a')
    product.setAttribute('href', `/detail/${this.item.id}`)
    product.setAttribute('class', 'product-item')
    const productImage = new ProductImage({src:this.item.thumbnailImg})
    const productName = new ProductName({name:this.item.productName})
    const productPrice = new ProductPirce({
      productPrice:this.item.price,
      discount:this.item.discountRate
    })
    const productLikeButton = new ProductLikeButton({productId:this.item.id})
    product.appendChild(productImage.render())
    product.appendChild(productName.render())
    product.appendChild(productPrice.render())
    product.appendChild(productLikeButton.intialize())


    return product
  }
}

export default ProductCard