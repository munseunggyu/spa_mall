class Test{
  constructor(){
    this.todoList = []
    this.ul = document.createElement('ul')
  }

  getList(){
    this.ul.innerHTML = ''
    this.todoList.forEach(todo => {
      const li = document.createElement('li')
      li.innerText = todo.txt
      this.ul.appendChild(li)
    })
  }

  render(){
    const div = document.createElement('div')

    const input = document.createElement('input')

    const form = document.createElement('form')

    const btn = document.createElement('button')
    btn.innerText = 'submit'


    // 즉 render에서 for문 돌면서 그려준다 but
    // rendering 하면 상태가 변한다.

    btn.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(input.value)

      this.todoList.push({
        id:new Date(),
        txt: input.value
      })
      input.value = ''
      this.getList()
    })



    form.appendChild(input)
    form.appendChild(btn)
    
    div.appendChild(form)
    div.appendChild(this.ul)


    // 상세페이지 예시
    // const div1 = document.createElement('a')
    // div1.innerText = 'div1'
    // div1.setAttribute('href',`/testDetail/1`)

    // const div2 = document.createElement('a')
    // div2.innerText = 'div2'
    // div2.setAttribute('href',`/testDetail/2`)

    // const div3 = document.createElement('a')
    // div3.innerText = 'div3'
    // div3.setAttribute('href',`/testDetail/3`)

    // div.appendChild(div1)
    // div.appendChild(div2)
    // div.appendChild(div3)

    return div
  }

  // initailize(){ // 초기화 처음 생성 될때
  //   const rendered = this.render() 
  //   this.lastRendered = rendered
  //   return this.lastRendered
  // }
}

export default Test