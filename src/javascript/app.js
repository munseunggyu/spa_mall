import {ProductPage,ProductDetail, Test, TestDetail} from './pages/index.js'
import {Router} from './utils/index.js'

export default class App{
  constructor(props){
    this.props = props
  }
  async setup(){
    const {el} = this.props

    const router = new Router({
      "/":ProductPage,
      "/detail/:id":ProductDetail,
      "/test":Test,
      "/testDetail/:id":TestDetail
    })
    router.init(el)
  }
}