let root = document.documentElement;
let background = document.querySelector('.background');

// Edit the background image in the home page
if (background) {
  background.style['filter'] = 'blur(8px)';
  background.style['--webkit-filter'] = 'blur(8px)';
  background.style['opacity'] = '0.6';
}

// Set the accent color
Vibrant.from('/img/home.jpg').getPalette(function(err, palette) {
  let vibrantColor = palette.Vibrant._rgb;
  let vibrantColorRGB = ''.concat(vibrantColor[0], ', ', vibrantColor[1], ', ', vibrantColor[2]);
  root.style.setProperty('--accent', vibrantColorRGB);
});
