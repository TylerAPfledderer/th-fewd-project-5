function search_bar() {
  // Get user input in search field and set text to lowercase.
	let input = document.getElementById('search-bar').value;
  input = input.toLowerCase();

  // Grab array of paragraph tags that contain caption text
  let caption = document.getElementById('captionGroup');
  let capText = caption.querySelectorAll('.caption > p');

  // Grab array of the anchor tags containing the photo thumbnails
  let image = document.querySelectorAll('.gallery__link');
  
  // Loop through each <p> containing the caption text.
  for (let i = 0; i < capText.length; i++) {
    // Grab caption text in each p tag, set to lowercase, and check if the user input is anywhere in the string.
    let search = capText[i]
      .textContent
      .toLowerCase()
      .includes(input);

    // If the user input is not in the caption text, hide the image. Else, make sure it's still displayed.
    if (!search) {
      image[i].style.display = "none";
    } else {
      image[i].style.display = "inline-block";
    }
  }
}

