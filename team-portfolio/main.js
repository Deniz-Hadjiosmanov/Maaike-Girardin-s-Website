let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".header nav");
    let getSidebarUl = document.querySelector(".header ul");
    let getLineContainer = document.querySelector("#linecontainer");
    let getLogo = document.querySelector(".header img");
    let getSidebarLinks = document.querySelectorAll(".header a");

    if (toggleNavStatus === false) {
        getSidebar.style.right = "10%";
        getLineContainer.style.left = "70%";
        getLogo.style.left = "-30%";
        /*getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "560px";
        getSidebarTitle.style.opacity = "0.5";*/

        let arrayLength = getSidebarLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getSidebarLinks[index].style.opacity = "1";

        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebar.style.width = "0px";
        getSidebarTitle.style.opacity = "0";
        getLogo.style.left = "-10%";

        let arrayLength = getSidebarLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getSidebarLinks[index].style.opacity = "0";

        }

        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}