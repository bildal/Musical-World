
let open = false

function toggleController () {
    console.log(open)
    if (open) // close controller 
    {
        document.getElementById('controllerWrap').classList.remove('open')
    } else {
        document.getElementById('controllerWrap').classList.add('open')
    }
    open = !open
}