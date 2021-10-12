
// window.addEventListener("load",()=>{
//     document.querySelector(".main").classList.remove("hidden");
//     document.querySelector(".home-section").classList.add("active");
//     document.querySelector(".page-loader").classList.add("fade-out");
//     setTimeout(()=>{
//         document.querySelector(".page-loader").style.display="none";
//     },600);
// })


const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
    }
})


document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== "")
    {
        hideSection();
        document.classList.add("hide-scrolling");
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");   
        },500);
    }
})