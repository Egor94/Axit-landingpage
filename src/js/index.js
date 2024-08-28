document.addEventListener("DOMContentLoaded", function () {
    const headerLinks = document.querySelectorAll(".header_link");
    headerLinks.forEach((item) => {
        item.addEventListener("click", function () {
            document.querySelector("header").classList.remove("open");
        })
        document.getElementById("burger").addEventListener("click", function () {
            document.querySelector("header").classList.toggle("open")
        })
    }
    )
}
)

document.addEventListener("scroll", function () {
    let scrollSize = document.documentElement.scrollTop;
    const upBotton = document.getElementById("arrowUp")
    if (scrollSize > 300) {
        upBotton.classList.add("active");
    } else {
        upBotton.classList.remove("active")
    }
})