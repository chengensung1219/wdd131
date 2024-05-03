const themeSelector = document.getElementById("theme")// replace with code to select dropdown element out of the HTML
function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark'){ // if the value is dark then:
        document.body.classList.add('dark'); // add the dark class to the body
        const logo = document.querySelector('img');
        logo.src = 'images/byui-logo_white.png'; // change the source of the logo to point to the white logo.
    } else{ // otherwise
        document.body.classList.remove('dark'); // remove the dark class
        logo.src = 'images/byui-logo_blue.webp'; // make sure the logo src is the blue logo.
    }
}

themeSelector.addEventListener('change', changeTheme);
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.