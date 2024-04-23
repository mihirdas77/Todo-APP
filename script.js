
let cont = document.getElementById("cont")
let load = document.getElementById("loading")
function fetchTodos(){
    console.log("press me")
    loading("https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif")
    fetchData()
}
function loading(content){
    load.src=content
}
function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=> res.json()).then((data)=>{
        console.log(data)
        loading("")
        displayTodo(data)
    })
    // for error checking-------------------->
    // .catch((err)=>{
    //     console.log("err", err)
    // })
}

function displayTodo(arr){
    arr.map((el,i)=> {
        let div = document.createElement("div")

        let h2 = document.createElement("h2")
        h2.textContent = `Title: ${el.title}`

        let p = document.createElement("p")
        p.textContent = `Status: ${el.completed}`

        let check = document.createElement("input")
        check.type="checkbox"

        div.append(h2,p,check)

        cont.append(div)
    })
}