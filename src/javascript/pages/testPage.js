import Test from "./test.js"

class TestPage{
  constructor(){
    this.mainElement = document.createElement('main')
  }
  render(){


    const test = new Test()
    this.mainElement.appendChild(test.render())

  }
}

export default TestPage