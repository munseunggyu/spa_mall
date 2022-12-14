import {ProductPage,ProductDetail, Test, TestDetail, TestPage} from './pages/index.js'
import {Router} from './utils/index.js'

export default class App{
  constructor(props){
    this.props = props
  }
  async setup(){
    const {el} = this.props

    const router = new Router({
      // "/":ProductPage,
      "/":TestPage,
      "/detail/:id":ProductDetail,
      // "/testPage":TestPage,
      "/testDetail/:id":TestDetail
    })
    router.init(el)
  }
}