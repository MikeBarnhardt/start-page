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

/**
 * Set event listeners for all themes.
 */
const themes = document.getElementsByClassName('theme');

for (var i = 0; i < themes.length; i++) {
  themes[i].addEventListener('click', changeTheme);
  themes[i].addEventListener('touch', changeTheme);
}

/**
 * Toggle theme menu.
 */
 
function toggleMenu(event) {
  document.getElementById('js-settings-menu').classList.toggle('is-open');
}

document.getElementById('js-settings-toggle').addEventListener('click', toggleMenu);
document.getElementById('js-settings-toggle').addEventListener('touch', toggleMenu);

(function(){
  onLoad();
}())