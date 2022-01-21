// const abrir = document.getElementById("open-modal")
// const cerrar = document.getElementById("close-modal")
// const modal = document.getElementById("modal")

// const toggleActiveModal = () => modal.classList.toggle("active")

// // function toggleActiveModal() {
// //   modal.classList.toggle("active")
// // }

// cerrar.addEventListener("click", toggleActiveModal)
// abrir.addEventListener("click", toggleActiveModal)


// Dragger

let dragged
document.addEventListener("drag", (e) => {}, false)

document.addEventListener(
  "dragstart",
  (e) => {
    dragged = e.target
    e.target.style.opacity = 0.4
  },
  false
)

document.addEventListener(
  "dragend",
  (e) => {
    e.target.style.opacity = ""
  },
  false
)

document.addEventListener(
  "dragover",
  (e) => {
    e.preventDefault()
  },
  false
)

document.addEventListener(
  "dragenter",
  (e) => {
    if (e.target.className == "dropzone") {
      e.target.style.background = "orangered"
    }
  },
  false
)

document.addEventListener(
  "dragleave",
  (e) => {
    if (e.target.className == "dropzone") {
      e.target.style.background = ""
    }
  },
  false
)

document.addEventListener(
  "drop",
  (e) => {
    e.preventDefault()
    if (e.target.className == "dropzone") {
      e.target.style.background = ""
      dragged.parentNode.removeChild(dragged)
      e.target.appendChild(dragged)
    }
  },
  false
)



const setText = data => {
  myContent.textContent = data
}

const getData = callaback => {
  setText('Solicitando autorización')
  setTimeout(()=> {
    callaback(true)
  }, 2000)
}

const showData = callback => {
  setText("Esperando a mostrar la información")
  setTimeout(()=> {
    callback({name: "carol"})
  },2000)
}

btn.addEventListener("click", ()=> {
  getData(gato => {
    if(gato) {
      showData(userxxx => {
        setText(userxxx.name)
      })
    }
  })
})
