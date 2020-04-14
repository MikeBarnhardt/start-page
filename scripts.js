/**
 * Changes the current theme.
 * @param {Object} event - click or touch event
 */
function changeTheme(event) {
  const theme = event.target.innerText.toLowerCase();

  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.log('Local storage is not provided by your browser.');
  }
  
  document.documentElement.setAttribute('class', theme);
}

/**
 * Attempt to set the theme from local storage.
 */
function onLoad() {  
  try {
    const theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('class', theme);
  } catch (error) {
    console.log('Local storage is not provided by your browser.');
  }
  
}

const themes = document.getElementsByClassName('theme');

for (var i = 0; i < themes.length; i++) {
  themes[i].addEventListener('click', changeTheme);
  themes[i].addEventListener('touchend', changeTheme);
}

(function(){
  onLoad();
}())