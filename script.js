
document.addEventListener("DOMContentLoaded", () => {

    // Hide Loader
    const loader = document.getElementById("loader");
    if(loader){
        setTimeout(()=>{
            loader.style.display = "none";
        },500);
    }

});
