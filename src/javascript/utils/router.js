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
    // detail 페이지 이동
    for(const key in routes){
      const route = routes[key]
      if(key.indexOf(':') > -1){
        const [_,routeName,...param] = key.split('/')
        this.routes['/' + routeName] = route
        delete this.routes[key] // id값만 따로 넘겨줄거기 때문에 삭제한다.
      }
    }
  }
  
  init(rootElementId){
    if(!rootElementId){
      console.error("Can not initiailize Route, not define rootElementId")
      return null
    }
    this.rootElementId = rootElementId
    this.routing(window.location.pathname)
    
    window.addEventListener('click',(e) => { // 다른 페이지 이동

      // 정확하게 a태그를 클릭했을 때에만 url로 연결이 되는 문제이다. e.preventDefault()가 실행되지 않는다.
      // 가장 근접한 조상 중 a태그를 찾도록 설계헤줘야 한다.
      // if(e.target.tagName.toLowerCase() === 'a'){
      //   e.preventDefault()
      //   this.routePush(e.target.href)
      // }

      if(e.target.closest('a')){ // closest('태그') 가까운 해당 태그를 찾는다
        e.preventDefault()
        this.routePush(e.target.closest('a').href)
      }
    })
    
    window.onpopstate = () => this.routing(window.location.pathname) // 뒤로가기
  }
  routePush(pathname){
    window.history.pushState({},null,pathname)
    this.routing(window.location.pathname)
  }

  routing(pathname){
    const [_,routeName, param] = pathname.split('/')
    let page = ''
    
    if(this.routes[pathname]){
      const component = new this.routes[pathname]
      page = component.render() 
    }else if(param){ // detail/:id 페이지를 처리하기 위해 
      console.log(param,routeName)
      const component = new this.routes['/' + routeName](param)
      page = component.render() 
    }
    
    if(page){
      this.render(page)
    }
  }
  render(page){
    const rootElement = document.querySelector(this.rootElementId)
    rootElement.innerHTML = ''
    rootElement.appendChild(page)
  }
}

export default Router