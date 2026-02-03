

const dashBoard = document.getElementById("dashboard")
const myTasks = document.getElementById("myTasks")
const proFile  = document.getElementById("proFile")
const closeAccount = document.getElementById("closeAccount")

dashBoard.addEventListener("click", () =>{
    window.location = "../dashboard.html"
})
myTasks.addEventListener("click", () =>{
    window.location = "../dashboard.html"
})
proFile.addEventListener("click", () =>{
    window.location = "../profile.html"
})
closeAccount.addEventListener("click", () =>{
    window.location = "../index.html"
})