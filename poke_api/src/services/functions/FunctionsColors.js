function hex2hsl(hex) {

  if(hex[0] === '#') hex = hex.slice(1);

  let r = parseInt(hex.slice(0,2), 16) / 255;
  let g = parseInt(hex.slice(2,4), 16) / 255;
  let b = parseInt(hex.slice(4,6), 16) / 255;
  let a = parseInt(hex.slice(6,8), 16) / 255 || 1;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if(max == min){
    h = s = 0; // achromatic
  }else{
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.floor(h * 360);
  s = Math.floor(s * 100);
  l = Math.floor(l * 100);
  a = a.toFixed(2);

  return 'hsla('+h + ', ' + s + '%, ' + l + '%, ' + a + ')';
}

function hsl2hex(hsl) {
  let sep = hsl.indexOf(",") > -1 ? "," : " ";

  if(hsl.substr(0,5)==='hsla(')
    hsl = hsl.substr(5).split(")")[0].split(sep);
  else
    hsl = hsl.substr(4).split(")")[0].split(sep);

  let h = hsl[0];
  let s = hsl[1].substr(0,hsl[1].length - 1) / 100;
  let l = hsl[2].substr(0,hsl[2].length - 1) / 100;
  let a = hsl[3];

  // strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1)
    h = h.substr(0,h.length - 3);
  else if (h.indexOf("rad") > -1)
    h = Math.round(h.substr(0,h.length - 3) * (180 / Math.PI));
  else if (h.indexOf("turn") > -1)
    h = Math.round(h.substr(0,h.length - 4) * 360);
  if (h >= 360)
    h %= 360;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;
      a = a || 1;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if(r.length === 1) r = '0'+r;
  if(g.length === 1) g = '0'+g;
  if(b.length === 1) b = '0'+b;
  a = Math.round(a * 255).toString(16);

  return '#'+r+g+b+a;
}

function getMidColor(color1, color2){

  if(color1[0] === '#') color1 = color1.slice(1);
  if(color2[0] === '#') color2 = color2.slice(1);

  let r1 = color1.slice(0,2);
  let g1 = color1.slice(2,4);
  let b1 = color1.slice(4,6);
  let a1 = color1.slice(6,8) || 'ff';

  let r2 = color2.slice(0,2);
  let g2 = color2.slice(2,4);
  let b2 = color2.slice(4,6);
  let a2 = color2.slice(6,8) || 'ff';

  let r = Math.floor((parseInt(r1, 16) + parseInt(r2, 16)) / 2).toString(16);
  let g = Math.floor((parseInt(g1, 16) + parseInt(g2, 16)) / 2).toString(16);
  let b = Math.floor((parseInt(b1, 16) + parseInt(b2, 16)) / 2).toString(16);
  let a = Math.floor((parseInt(a1, 16) + parseInt(a2, 16)) / 2).toString(16);

  return r+g+b+a;
}

const getComplementaryColor = (hsl) => {
  let sep = hsl.indexOf(",") > -1 ? "," : " ";

  if(hsl.substr(0,5)==='hsla(')
    hsl = hsl.substr(5).split(")")[0].split(sep);
  else
    hsl = hsl.substr(4).split(")")[0].split(sep);
  
  let h = parseInt(hsl[0], 10);
  let s = hsl[1].substr(0,hsl[1].length - 1) / 100;
  let l = hsl[2].substr(0,hsl[2].length - 1) / 100;
  let a = hsl[3] || 1;
  h = (h + 180) % 360;

  l < 0.5 ? l = 0.6 : l = 0.4;
  
  s < 0.5 ? l < 0.5 ? l = 0.1 : l = .9 : s = .8;
  
  l = l.toFixed(2);
  
  return  'hsla('+h + ', ' + s*100 + '%' + ',' + l*100 + '%, ' + a + ')';
}


export { hex2hsl, hsl2hex, getMidColor, getComplementaryColor }