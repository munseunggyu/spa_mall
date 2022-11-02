class TestDetail{
  constructor(id){
    this.id = id
  }

  render(){
    const div = document.createElement('div')
    div.innerText = `hi ${this.id}`

    return div
  }
}

export default TestDetail