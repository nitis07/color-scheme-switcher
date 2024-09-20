const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach((btn)=>{
   btn.addEventListener("click",(ev)=>{
    if(ev.target.id=== "pink"){
      body.style.backgroundColor = ev.target.id = "pink"
    }
    if(ev.target.id=== "brown"){
      body.style.backgroundColor = ev.target.id = "brown"
    }
    if(ev.target.id=== "yellow"){
      body.style.backgroundColor = ev.target.id = "yellow"
    }
    if(ev.target.id=== "red"){
      body.style.backgroundColor = ev.target.id = "red"
    }
    if(ev.target.id=== "blue"){
      body.style.backgroundColor = ev.target.id = "blue"
    }
   })
})