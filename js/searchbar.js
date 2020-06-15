function search_bar() {
	let input = document.getElementById('search-bar').value;
	input = input.toLowerCase();
  let item = document.querySelectorAll('.gallery__link');
  
  for (let i = 0; i < item.length; i++) {
    let search = item[i]
      .getAttribute("title")
      .toLowerCase()
      .startsWith(input);
    if (!search) {
      item[i].style.display = "none";
    } else {
      item[i].style.display = "inline-block";
    }
    
  }
}