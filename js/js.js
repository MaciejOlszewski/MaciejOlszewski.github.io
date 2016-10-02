



function onClick() {
  var searchfield = document.getElementById('search');
  var searchString = document.getElementById('searchString');
if (window.innerWidth > 590){
  if (!searchfield.classList.contains("hide") && (searchString.value=="")){
    searchfield.classList.add("hide")
    // console.log("hide");
  }else if (!searchfield.classList.contains("hide") && (searchString.value!="")) {
    // console.log("search");
    document.getElementById('search').submit();
    searchfield.value="";
  }else{
    searchfield.classList.remove("hide")
    // console.log("reveal");
  }}}
