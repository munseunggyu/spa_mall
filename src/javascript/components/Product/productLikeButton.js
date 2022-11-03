class ProductLikeButton{
  constructor(id){
    this.productId = id
    this.like = this.clickedLikeList()
    console.log(this.like)
  }

  clickedLikeList(){
    if(!localStorage.getItem('likeList')){
      localStorage.setItem('likeList',JSON.stringify([]))
    }
    const likeList = JSON.parse(localStorage.getItem('likeList'))
    return likeList.includes(this.productId)
  }

  addClickEvent(likeButton){
    likeButton.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const likeList = JSON.parse(localStorage.getItem('likeList'))

      this.like ? likeButton.classList.remove('on') : likeButton.classList.add('class','on')
      const newLikeList = this.like ? likeList.filter(id => id !== this.productId) : [...likeList,this.productId]
      localStorage.setItem('likeList',JSON.stringify(newLikeList))
      this.like = !this.like

    })
  }

  render(){
    const likeButton = document.createElement('button')
    likeButton.setAttribute('class','like-btn')
    this.like && likeButton.classList.add('on')

    const likeButtonIr = document.createElement('span')
    likeButtonIr.setAttribute('class','ir')
    likeButtonIr.textContent = '좋아요 버튼'

    this.addClickEvent(likeButton)

    likeButton.appendChild(likeButtonIr)
    return likeButton
  }
}

export default ProductLikeButton