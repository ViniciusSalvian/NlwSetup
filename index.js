const form = document.querySelector("#form-habits")
const body = document.querySelector("body")
const button = document.getElementById("register")
const nlwSetup = new NLWSetup(form)
const btnSwitchTheme = document.getElementById("btnSwitchTheme")

const switchThemeInput = document.getElementById("switchTheme")

const root = document.querySelector(":root")

btnSwitchTheme.addEventListener("click", function () {
  if (body.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f7f3f3")
    root.style.setProperty("--font-color", "#18181b"),
      root.style.setProperty("--day-color", "#18181b")
    
    document.getElementById("logoHabits").src = "./assets/logo2.svg"
    switchThemeInput.style.setProperty("transform", "translateX(2.5rem)")
    switchThemeInput.style.setProperty("transition", "transform 0.1s")
    body.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#18181b")
    root.style.setProperty("--font-color", "#f7f3f3"),
      root.style.setProperty("--day-color", "#a1a1aa")
   
    document.getElementById("logoHabits").src = "./assets/logo.svg"
    switchThemeInput.style.setProperty("transform", "translateX(-0.2rem)")
    switchThemeInput.style.setProperty("transition", "transform 0.1s")
     body.dataset.theme = "dark"
  }
})

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
