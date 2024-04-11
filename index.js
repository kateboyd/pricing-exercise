const basicpricing = 19.99
const propricing = 24.99
const masterpricing = 39.99

function annual (price) {
    return price * 11
}

document.querySelector("button.monthly").addEventListener("click", () => {
	document.querySelector("button.monthly").classList.remove("from-indigo-200", "to-indigo-600")
    document.querySelector("button.monthly").classList.add("from-pink-400", "to-pink-900")
    document.querySelector("button.annual").classList.remove("from-pink-400", "to-pink-900")
	document.querySelector("button.annual").classList.add("from-indigo-200", "to-indigo-600")
    document.querySelector("#basicpricing").textContent = basicpricing
    document.querySelector("#propricing").textContent = propricing
    document.querySelector("#masterpricing").textContent = masterpricing

})

document.querySelector("button.annual").addEventListener("click", () => {
    document.querySelector("button.monthly").classList.remove("from-pink-400", "to-pink-900")
    document.querySelector("button.monthly").classList.add("from-indigo-200", "to-indigo-600")
	document.querySelector("button.annual").classList.remove("from-indigo-200", "to-indigo-600")
    document.querySelector("button.annual").classList.add("from-pink-400", "to-pink-900")
    document.querySelector("#basicpricing").textContent = annual(basicpricing).toFixed(2)
    document.querySelector("#propricing").textContent = annual(propricing).toFixed(2)
    document.querySelector("#masterpricing").textContent = annual(masterpricing).toFixed(2)
    
})