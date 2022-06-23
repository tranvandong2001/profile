const navIcons = document.querySelectorAll(".content__left-icon");
const contentWrap = document.querySelectorAll(".content__right-wrapper");
navIcons.forEach((nav, index) => {
    const contents = contentWrap[index];
    nav.addEventListener("click", function () {
        document
            .querySelector(".content__left-icon.active")
            .classList.remove("active");
        document
            .querySelector(".content__right-wrapper.show")
            .classList.remove("show");

        this.classList.add("active");
        contents.classList.add("show");
    });
});
