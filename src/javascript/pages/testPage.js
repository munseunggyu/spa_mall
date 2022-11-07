import Test from "./test.js"

class TestPage{
  constructor(){
    this.mainElement = document.createElement('main')
  }
  render(){

    const test = new Test()
    this.mainElement.innerText = 'hi'
    this.mainElement.appendChild(test.intialize())

    return this.mainElement
  }
}

export default TestPage