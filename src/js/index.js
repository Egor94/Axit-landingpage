document.addEventListener("DOMContentLoaded", () => {
    const headerLinks = document.querySelectorAll(".header_link");
    headerLinks.forEach((item) => {
        item.addEventListener("click", () => {
            document.querySelector("header").classList.remove("open");
        });
        document.getElementById("burger").addEventListener("click", () => {
            document.querySelector("header").classList.toggle("open");
        });
    });

    const softTabs = document.querySelectorAll(".soft_tab");
    const softContentItems = document.querySelectorAll(".soft_right");
    softTabs.forEach((tabItem) => {
        tabItem.addEventListener("click", (event) => {
            const tabId = event.target.id;
            softTabs.forEach((tab) => {
                if (tab.id === tabId) {
                    tab.classList.add("soft_tab_active");
                } else {
                    tab.classList.remove("soft_tab_active");
                }
            });

            const contentId = tabId.replace("tab", "content");
            softContentItems.forEach(contentItem => {
                if (contentItem.id === contentId) {
                    contentItem.classList.add("soft_right_visible");
                } else {
                    contentItem.classList.remove("soft_right_visible");
                }
            });
        });
    });
});

document.addEventListener("scroll", () => {
    let scrollSize = document.documentElement.scrollTop;
    const upBotton = document.getElementById("arrowUp");
    if (scrollSize > 300) {
        upBotton.classList.add("active");
    } else {
        upBotton.classList.remove("active");
    }

    const header = document.querySelector("header");
    const headerClasses = [...header?.classList];
    if (headerClasses.includes("open")) {
        header.classList.remove("open");
    }
});