let root = document.documentElement;
let background = document.querySelector('.background');

// Edit the background image in the home page
if (background) {
  background.style['filter'] = 'blur(8px)';
  background.style['--webkit-filter'] = 'blur(8px)';
}

// Transform color to RGB
function colorToRGB(c) {
  return ''.concat(Math.floor(c[0]), ', ', Math.floor(c[1]), ', ', Math.floor(c[2]));
}

// Darken an RGB color by a certain percentage
function darkenColor(c, percent) {
    let r = parseInt(c.substring(1,3),16);
    let g = parseInt(c.substring(3,5),16);
    let b = parseInt(c.substring(5,7),16);
    r = parseInt(r * (100 + percent) / 100);
    g = parseInt(g * (100 + percent) / 100);
    b = parseInt(b * (100 + percent) / 100);
    r = (r<255)?r:255;
    g = (g<255)?g:255;
    b = (b<255)?b:255;
    let color = ''.concat(Math.round(r), ', ', Math.round(g), ', ', Math.round(b));
    return color;
}

// Set the accent color
let banner = document.querySelector('.banner');
if (banner) {
  let backgroundImage = banner.style.backgroundImage;
  let backgroundImageUrl = backgroundImage.slice(4, -1).replace(/"/g, "");
  // Set the accent color from the banner image
  Vibrant.from(backgroundImageUrl).getPalette(function(err, palette) {
    root.style.setProperty('--accent', colorToRGB(palette.LightVibrant._rgb));
    root.style.setProperty('--dark-accent', colorToRGB(palette.DarkMuted._rgb));
  });
} else {
  // Set the accent color from the home page image
  Vibrant.from('/img/home.jpg').getPalette(function(err, palette) {
    root.style.setProperty('--accent', colorToRGB(palette.Vibrant._rgb));
    root.style.setProperty('--dark-accent', colorToRGB(palette.DarkVibrant._rgb));
  });
}
