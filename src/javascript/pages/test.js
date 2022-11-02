class Test{
  constructor(){

  }

  render(){
    const div = document.createElement('div')

    const div1 = document.createElement('a')
    div1.innerText = 'div1'
    div1.setAttribute('href',`/testDetail/1`)

    const div2 = document.createElement('a')
    div2.innerText = 'div2'
    div2.setAttribute('href',`/testDetail/2`)

    const div3 = document.createElement('a')
    div3.innerText = 'div3'
    div3.setAttribute('href',`/testDetail/3`)

    div.appendChild(div1)
    div.appendChild(div2)
    div.appendChild(div3)

    return div
  }
}

export default Test