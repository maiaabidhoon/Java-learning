const checkboxes = document.querySelectorAll("input[type=checkbox]")
const progressBar = document.getElementById("progressBar")
const progressText = document.getElementById("progressText")

function updateProgress() {

    let total = checkboxes.length
    let completed = document.querySelectorAll("input:checked").length

    let percent = Math.round((completed / total) * 100)

    progressBar.style.width = percent + "%"
    progressText.innerText = percent + "% Completed"

}

checkboxes.forEach(box => {

    let saved = localStorage.getItem(box.dataset.topic)

    if (saved === "true") {
        box.checked = true
        box.parentElement.classList.add("completed")
    }

    box.addEventListener("change", () => {

        localStorage.setItem(box.dataset.topic, box.checked)

        box.parentElement.classList.toggle("completed")

        updateProgress()

    })

})

updateProgress()

const search = document.getElementById("search")

search.addEventListener("keyup", () => {

    let value = search.value.toLowerCase()

    document.querySelectorAll(".card label").forEach(label => {

        let text = label.innerText.toLowerCase()

        label.style.display = text.includes(value) ? "block" : "none"

    })

})

const toggle = document.getElementById("themeToggle")

toggle.onclick = () => {

    document.body.classList.toggle("dark")

}
