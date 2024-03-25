

function textarea(){
  const text = document.getElementById("text-area")

  text.addEventListener("keydown" , event=>{
    const first = document.getElementById("first-span").innerText =event.key ;
    
  })
}

textarea();