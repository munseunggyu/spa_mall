import Component from "../../core/Component.js"

class ProductLikeButton extends Component{
  constructor(props){
    super(props)
    this.state = {  //상태 관리 해준다.
      like : this.checkLikeList() 
    }
  }

  // state가 바뀌면 랜더링이 일어난다.

  // 좋아요가 되어있는지 true / false로 반환해 준다.
  checkLikeList(){
    if(!localStorage.getItem('likeList')){
      localStorage.setItem('likeList',JSON.stringify([]))
    }
    const likeList = JSON.parse(localStorage.getItem('likeList'))
    return likeList.includes(this.props.productId)
  }

  changeLiked(){
    const likeList = JSON.parse(localStorage.getItem('likeList'))
    if(this.checkLikeList()){ // 만약 좋아요 되어 있으면
      const newLikeList = likeList.filter(id => id !== this.props.productId)
      localStorage.setItem('likeList',JSON.stringify(newLikeList))
    }else{
      likeList.push(this.props.productId)
      localStorage.setItem('likeList',JSON.stringify(likeList))
    }
    this.setState({like:this.checkLikeList()})
  }

  // state가 바뀌면 reRender이 일어난다.
  setState(newState){
    this.state = newState
    const rendered = this.render()  // render에서 return하는 값을 바꿔서 보내준다.

    // 그전에 render에서 return 할 값을 미리 저장하고 그것에 접근하여 그것을 바꿔주는 형식
    this.lastRendered.replaceWith(rendered) 
    this.lastRendered = rendered
    console.log(this.lastRendered)

  }  


  // 이전 코드
  // 문제점: 요소를 조작하는 것은 Component의 render 부분에서만 이루어져야 한다.
  // like 상태에 따라 랜더링 되게 해줘야 한다.
  // 해결: 랜더에서 this.like에 맞춰 랜더링을 하게 해주면 된다.
  // addClickEvent(likeButton){
  //   likeButton.addEventListener('click', (e) => {
  //     e.preventDefault()
  //     e.stopPropagation()
  //     this.changeLiked()
  //     console.log(this.like)
      // const likeList = JSON.parse(localStorage.getItem('likeList'))
      // this.like ? likeButton.classList.remove('on') : likeButton.classList.add('class','on')
      // const newLikeList = this.like ? likeList.filter(id => id !== this.props.productId) : [...likeList,this.props.productId]
      // localStorage.setItem('likeList',JSON.stringify(newLikeList))
      // this.like = !this.like
  //   })
  // }

  render(){
    const likeButton = document.createElement('button')
    likeButton.setAttribute('class','like-btn')
    this.state.like && likeButton.classList.add('on')

    const likeButtonIr = document.createElement('span')
    likeButtonIr.setAttribute('class','ir')
    likeButtonIr.textContent = '좋아요 버튼'
    likeButton.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.changeLiked()
      console.log(this.state.like)

    })
    
    likeButton.appendChild(likeButtonIr)
    return likeButton
  }

  initailize(){ // 초기화 처음 생성 될때
    const rendered = this.render() 
    this.lastRendered = rendered
    return this.lastRendered
  }
}

export default ProductLikeButton