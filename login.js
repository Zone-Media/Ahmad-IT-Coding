const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
   

    const authenticated = authentication(username)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username){
    if(username === "ahmadit404"){
        return true
    }else{
        return false
    }
}
