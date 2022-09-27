const filterItem = document.querySelector(".items");
const filterImage = document.querySelectorAll(".image");
window.onload = () => { // once window loaded
    filterItem.addEventListener("click", (selectedItem) => {
        if(selectedItem.target.classList.contains("item"))
        {
            filterItem.querySelector(".active").classList.remove("active")
            selectedItem.target.classList.add("active")
            let selectedName = selectedItem.target.getAttribute("data-name")
            filterImage.forEach((image) => {
                let filterImg = image.getAttribute("data-name")
                if (filterImg == selectedName || selectedName == "All") {
                    image.classList.add("show")
                    image.classList.remove("hide")
                }
                else{
                    image.classList.add("hide")
                }
            })
        }
    })
    
}