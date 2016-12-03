document.addEventListener('DOMContentLoaded', function(){
/* CSS color names */
  let colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"].map(e => e.toLowerCase());
/********************/

// Elements
  let button = document.getElementById('btn-add');
  let colorInput = document.getElementById('color-input');
  let list = document.getElementById('color-list');
  let colorized = document.getElementById('li-color');
  let availableColors = document.getElementById('num-colors');

// Keeping track of list items
  let numberOfColors = 0;

  function showNumberOfColors(){
    if (numberOfColors === 0) {
      availableColors.innerHTML = `There are no colors available.`;
    }
    else if (numberOfColors === 1){
      availableColors.innerHTML = `There is <b>${numberOfColors}</b> color available.`;
    }
    else {
      availableColors.innerHTML = `There are <b>${numberOfColors}</b> colors available.`;
    }
  };


// Handler function for adding list elements    
  function addNewColor(){
    let colorValue = colorInput.value
    if (colorValue && colors.includes(colorValue.toLowerCase())){
      let listItem = document.createElement('LI');
      let img = document.createElement('IMG');
      img.src = 'img/garbage-bin.png';
      let bin = document.createElement('A');
      bin.href = 'javascript:void(0)';
      bin.appendChild(img);
      listItem.innerHTML = `<span class="item">${colorValue}</span> `
      listItem.appendChild(bin);
      list.appendChild(listItem);
      numberOfColors += 1;
      colorInput.value = '';
      showNumberOfColors();

    }
    else {
      alert("That's not a valid CSS color.")
      colorInput.value = '';
    }
  };

// Handler function for setting the color and removing list items
  function colorize(event){
    let target = event.target;

    if (target.nodeName === 'SPAN' && target.parentNode.nodeName === 'LI'){
      let thisItemColor = target.innerHTML;
      colorized.style['background-color'] = thisItemColor;
    }
    if (target.nodeName === 'IMG' &&
        target.parentNode.parentNode.nodeName === 'LI'){ 
      let listItem = target.closest('li');
      if (colorized.style['background-color'] === listItem.firstChild.innerHTML){
        colorized.style['background-color'] = 'azure';
      }
      listItem.parentNode.removeChild(listItem);
      numberOfColors -= 1;
      colorInput.value = '';
      showNumberOfColors();
    }
    event.stopPropagation();
  };

  showNumberOfColors();

// Add event listeners
  colorInput.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
      addNewColor();
    }
  });
  button.addEventListener('click', addNewColor, false);
  list.addEventListener('click', colorize, false);

});