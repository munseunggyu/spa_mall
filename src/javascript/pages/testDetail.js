class TestDetail{
  constructor(id){
    this.id = id
  }

  render(){
    const div = document.createElement('div')
    div.innerText = `hi ${this.id}`
    const hi = document.createElement('span')
    hi.innerText = 'll'
    div.appendChild(hi)
    return div
  }
}

export default TestDetail