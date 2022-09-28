let root = document.documentElement;
let background = document.querySelector('.background');

// Edit the background image in the home page
if (background) {
  background.style['filter'] = 'blur(8px)';
  background.style['--webkit-filter'] = 'blur(8px)';
}

function colorToRGB(c) {
  return ''.concat(Math.floor(c[0]), ', ', Math.floor(c[1]), ', ', Math.floor(c[2]));
}

// Set the accent color
Vibrant.from('/img/home.jpg').getPalette(function(err, palette) {
  root.style.setProperty('--vibrant', colorToRGB(palette.Vibrant._rgb));
  root.style.setProperty('--light-vibrant', colorToRGB(palette.LightVibrant._rgb));
  root.style.setProperty('--dark-vibrant', colorToRGB(palette.DarkVibrant._rgb));
  root.style.setProperty('--muted', colorToRGB(palette.Muted._rgb));
  root.style.setProperty('--light-muted', colorToRGB(palette.LightMuted._rgb));
  root.style.setProperty('--dark-muted', colorToRGB(palette.DarkMuted._rgb));
});
