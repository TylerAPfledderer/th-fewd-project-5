function search_bar() {
	let input = document.getElementById('search-bar').value;
  input = input.toLowerCase();
  console.log(input);
  let caption = document.getElementById('captionGroup');
  let capText = caption.querySelectorAll('.caption > p');

  let image = document.querySelectorAll('.gallery__link');
  
  for (let i = 0; i < capText.length; i++) {
    let search = capText[i]
      .textContent
      .toLowerCase()
      .includes(input);
    if (!search || !input === null) {
      image[i].style.display = "none";
    } else {
      image[i].style.display = "inline-block";
    }
    
  }
}