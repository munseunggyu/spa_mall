class Router{
  // const router = new Router({
  //   "/":ProductPage,
  //   "/detail":ProductDetail
  // })
  constructor(routes){
    if(!routes){
      console.error('Can not initiailize routes, need routes!')
    }
    this.routes = routes
  }
  init(rootElementId){
    if(!rootElementId){
      console.error("Can not initiailize Route, not define rootElementId")
      return null
    }
    this.rootElementId = rootElementId
    this.routing(window.location.pathname)
    
    window.addEventListener('click',(e) => { // 다른 페이지 이동
      if(e.target.tagName.toLowerCase() === 'a'){
        e.preventDefault()
        this.routePush(e.target.href)
      }
    })
    window.onpopstate = () => this.routing(window.location.pathname) // 뒤로가기
  }
  routePush(pathname){
    window.history.pushState({},null,pathname)
    this.routing(window.location.pathname)
  }

  routing(pathname){
    const [_,routeName,...param] = pathname.split('/')
    let page = ''

    if(this.routes[pathname]){
      const component = new this.routes[pathname]
      page = component.render()
    }
    
    if(page){
      this.render(page)
    }
  }
  render(page){
    console.log('hi')
    const rootElement = document.querySelector(this.rootElementId)
    rootElement.innerHTML = ''
    rootElement.appendChild(page)
  }
}

export default Router