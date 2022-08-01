const searchInput=document.querySelector(".search-input");
const searchBtn = document.querySelector('.goole-search-btn')
searchBtn.addEventListener("click",function(event){
    search();
})
function search(){
    const input=searchInput.value;
    window.location.href="https://www.google.com/search?q="+input
}