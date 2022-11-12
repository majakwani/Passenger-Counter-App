function increment(){
    let element = document.getElementById("counter")
    count = element.innerText
    count = parseInt(count)
    count = count + 1
    element.innerText = count
}