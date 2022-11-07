class Test{
  constructor(){
    this.state = {
      todoList:[]
    }
    this.ul = document.createElement('ul')
  }

  setState(newState){
    this.state = newState
    const rendered = this.render()  // render에서 return하는 값을 바꿔서 보내준다.
    // 그전에 render에서 return 할 값을 미리 저장하고 그것에 접근하여 그것을 바꿔주는 형식
    this.lastRendered.replaceWith(rendered) 
    this.lastRendered = rendered
    console.log(this.lastRendered)
  }  

  // const likeList = JSON.parse(localStorage.getItem('likeList'))
  // localStorage.setItem('likeList',JSON.stringify(newLikeList))
  getList(){
    if(!JSON.parse(localStorage.getItem('todoList'))){
      localStorage.setItem('todoList',JSON.stringify([]))
    }else{
      
      return JSON.parse(localStorage.getItem('todoList'))
    }
  }

  render(){
    this.state.todoList = this.getList()
    console.log(this.state.todoList)
    const div = document.createElement('div')
    const input = document.createElement('input')
    const form = document.createElement('form')
    const btn = document.createElement('button')
    btn.innerText = 'submit'

    const frag = document.createDocumentFragment()
    this.state.todoList.forEach(todo => {
      console.log(todo.txt)
      const li = document.createElement('li')
      li.innerText = todo.txt
      frag.appendChild(li)
    })
    this.ul.appendChild(frag)

    // 즉 render에서 for문 돌면서 그려준다 but
    // rendering 하면 상태가 변한다.
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      this.ul.innerHTML = null
      localStorage.setItem('todoList',JSON.stringify([
        ...this.state.todoList,
        {
          id:new Date(),
          txt: input.value
        }
      ]))
      input.value = ''

      this.setState({todoList:this.state.todoList})
      console.log(this.state.todoList)
    })

    form.appendChild(input)
    form.appendChild(btn)
    
    div.appendChild(form)
    div.appendChild(this.ul)

    return div
  }

  intialize(){ // 초기화 처음 생성 될때
    const rendered = this.render() 
    this.lastRendered = rendered
    return this.lastRendered
  }
}

export default Test



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