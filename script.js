console.log('Its working')

//for maintaining the theme even after reload
let theme = localStorage.getItem('theme')
if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')
for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Option clicked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }
    //for maintaining the theme even after reload
    localStorage.setItem('theme', mode)


}


/*
Yes, you are correct. Let's go through the steps again to clarify:

1. When the page is loaded, the code checks if a theme is stored in the localStorage.
 Since it's the first time the page is loaded, the `localStorage.getItem('theme')` call will return `null`.

2. Because `theme == null` is true, the code calls `setTheme('light')` to set the default theme to 'light'.
The 'light' theme is applied by changing the `href` attribute of the element with the ID 'theme-style' to 'default.css'. 
Additionally, the 'light' theme is stored in the localStorage using `localStorage.setItem('theme', mode)`.

3. If you click on any other theme button (e.g., 'blue', 'green', 'purple'), the corresponding event listener triggers.
Inside the event listener function, the selected theme mode is retrieved from the clicked element using `this.dataset.mode`.

4. The `setTheme` function is then called with the new mode as the parameter. 
The function sets the `href` attribute of the element with the ID 'theme-style' to the appropriate CSS file based on the selected mode ('blue.css', 'green.css', 'purple.css'). 
The selected mode is also stored in the localStorage using `localStorage.setItem('theme', mode)` to update the stored theme.

So, when you click on a different theme button, the theme changes dynamically,
and the updated theme is stored in the localStorage so that it can be applied again when the page is reloaded in the future.

*/