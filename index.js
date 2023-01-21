const form = document.querySelector("#form-habits")
const button = document.querySelector("header button")
const nlwSetup = new NLWSetup(form)

form.addEventListener("change", save)
button.addEventListener("click", add)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExist = nlwSetup.dayExists(today)

  if (dayExist) {
    alert("Dia ja existente! 🔴")
    return
  }

  nlwSetup.addDay(today)
  alert("Adicionado com sucesso! ✅")
}

function save() {
  localStorage.setItem("NLWSetupdata@Habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetupdata@Habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
