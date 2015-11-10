function onClick() {
  var searchfield = document.getElementById('searchfield');
if (window.innerWidth > 590){
  if (!searchfield.classList.contains("hide") && (searchfield.value=="")){
    searchfield.classList.add("hide")
    console.log("ukrycie");
  }else if (!searchfield.classList.contains("hide") && (searchfield.value!="")) {
    console.log("wyszukiwanie");
    searchfield.value="";
  }else{
    searchfield.classList.remove("hide")
    console.log("odkrycie");
  }}}
