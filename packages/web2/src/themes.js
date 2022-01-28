/*
// run esbuild to get themes object
// esbuild ./data/themes.js --bundle --global-name=themes

// paste into browser console

// run code below to extract the string with jscad themes

function extract (theme) {
  console.log(theme)
  return { name: theme.name, color: theme.viewer.rendering.meshColor, bg: theme.viewer.rendering.background, grid1: theme.viewer.grid.color, grid2: theme.viewer.grid.subColor }
}
function getLast (o) {
  const keys = Object.keys(o)
  return keys[keys.length - 1]
}
let str = '{\n'
const lastKey = getLast(themes)
for (const p in themes) {
  const t = extract(themes[p])
  str += JSON.stringify(p)+':{\n'
  const lastKey2 = getLast(t)
  for (const p2 in t) {
    str += ` ${JSON.stringify(p2)}: ${JSON.stringify(t[p2])}`
    if (lastKey2 !== p2) str += ','
    str += '\n'
  }
  str += '}'
  if (lastKey !== p) str += ','
  str += '\n'
}
str += '}\n'
console.log(str)

// */

// JSON.parse can be faster than declaring data as an object directly
// https://v8.dev/blog/cost-of-javascript-2019#json
// the article does mention that perf gain begins to be noticable with data above 10k
// so this trick may or may not be worth it
// (downside is adding extra quotes on key names an less readability)
export const themes = JSON.parse(`
{
"light":{
 "name": "Light",
 "color": [0,0.6,1,1],
 "bg": [1,1,1,1],
 "grid1": [0,0,0,1],
 "grid2": [0,0,1,0.5]
},
"dark":{
 "name": "Dark",
 "color": [1,0.4,0,1],
 "bg": [0.211,0.2,0.207,1],
 "grid1": [1,1,1,0.5],
 "grid2": [0,1,1,0.5]
},
"grass":{
 "name": "Grass",
 "color": [0.51,0.18,0.07,1],
 "bg": [0.23,0.45,0.26,1],
 "grid1": [0.98,0.94,0.68,1],
 "grid2": [0.93,0.7,0.32,0.5]
},
"ocean":{
 "name": "Ocean",
 "color": [0.61,0.61,0.61,1],
 "bg": [0.23,0.39,0.76,1],
 "grid1": [1,1,1,1],
 "grid2": [0.29,0.52,0.96,0.5]
},
"arcticsunrise":{
 "name": "Arctic Sunrise",
 "color": [0.43137254901960786,0.7098039215686275,0.7529411764705882,1],
 "bg": [1,0.8,0.7333333333333333,1],
 "grid1": [0,0.4235294117647059,0.5176470588235295,1],
 "grid2": [0.8862745098039215,0.9098039215686274,0.8941176470588236,1]
},
"backtoschool":{
 "name": "Back to School",
 "color": [0.9803921568627451,0.6823529411764706,0.23921568627450981,1],
 "bg": [0.5058823529411764,0.44313725490196076,0.3686274509803922,1],
 "grid1": [0.9215686274509803,0.5411764705882353,0.26666666666666666,1],
 "grid2": [0.9176470588235294,0.3254901960784314,0.3686274509803922,1]
},
"beyondblackwhite":{
 "name": "Beyond Black & White",
 "color": [0.6862745098039216,0.10980392156862745,0.10980392156862745,1],
 "bg": [0.3568627450980392,0.7843137254901961,0.6745098039215687,1],
 "grid1": [0.9411764705882353,0.9372549019607843,0.996078431372549,1],
 "grid2": [0.00784313725490196,0.0196078431372549,0.03529411764705882,1]
},
"boldberries":{
 "name": "Bold Berries",
 "color": [0.796078431372549,0,0,1],
 "bg": [0.3137254901960784,0.19215686274509805,0.1843137254901961,1],
 "grid1": [0.8941176470588236,0.9176470588235294,0.5490196078431373,1],
 "grid2": [0.24705882352941178,0.4235294117647059,0.27058823529411763,1]
},
"candycoatedbrights":{
 "name": "Candy-coated Brights",
 "color": [0.8823529411764706,0.19215686274509805,0.34509803921568627,1],
 "bg": [0.9215686274509803,0.5411764705882353,0.26666666666666666,1],
 "grid1": [1,0.9254901960784314,0.3607843137254902,1],
 "grid2": [0,0.5529411764705883,0.796078431372549,1]
},
"cheerfulfriendly":{
 "name": "Cheerful & Friendly",
 "color": [0.6980392156862745,0.8588235294117647,0.8352941176470589,1],
 "bg": [0.16862745098039217,0.3803921568627451,0.42745098039215684,1],
 "grid1": [1,1,1,1],
 "grid2": [0.9803921568627451,0.5529411764705883,0.3843137254901961,1]
},
"classicmetallics":{
 "name": "Classic Metallics",
 "color": [0.9568627450980393,0.9568627450980393,0.9372549019607843,1],
 "bg": [0.03137254901960784,0.027450980392156862,0.023529411764705882,1],
 "grid1": [0.8196078431372549,0.6980392156862745,0.5019607843137255,1],
 "grid2": [0.34901960784313724,0.30196078431372547,0.27450980392156865,1]
},
"cozywarm":{
 "name": "Cozy & Warm",
 "color": [0.7098039215686275,0.11372549019607843,0.0392156862745098,1],
 "bg": [0.4,0.13333333333333333,0.1450980392156863,1],
 "grid1": [0.9176470588235294,0.8274509803921568,0.611764705882353,1],
 "grid2": [0.49019607843137253,0.3686274509803922,0.23529411764705882,1]
},
"crispdramatic":{
 "name": "Crisp & Dramatic",
 "color": [0.40784313725490196,0.5098039215686274,0.6196078431372549,1],
 "bg": [0.3137254901960784,0.3176470588235294,0.3764705882352941,1],
 "grid1": [0.6823529411764706,0.7411764705882353,0.2196078431372549,1],
 "grid2": [0.34901960784313724,0.5098039215686274,0.20392156862745098,1]
},
"distinctiveunexpected":{
 "name": "Distinctive & Unexpected",
 "color": [0.6941176470588235,0.8431372549019608,0.8235294117647058,1],
 "bg": [0.3568627450980392,0.7843137254901961,0.6745098039215687,1],
 "grid1": [0.2627450980392157,0.1803921568627451,0.2,1],
 "grid2": [0.9058823529411765,0.2784313725490196,0.1803921568627451,1]
},
"exotichighimpact":{
 "name": "Exotic & High-impact",
 "color": [0.45098039215686275,0.3764705882352941,0.3568627450980392,1],
 "bg": [0.058823529411764705,0.12156862745098039,0.2196078431372549,1],
 "grid1": [0.9607843137254902,0.32941176470588235,0.28627450980392155,1],
 "grid2": [0.10588235294117647,0.29411764705882354,0.35294117647058826,1]
},
"goldenafternoon":{
 "name": "Golden Afternoon",
 "color": [0.803921568627451,0.7450980392156863,0.6549019607843137,1],
 "bg": [0.5333333333333333,0.1411764705882353,0.14901960784313725,1],
 "grid1": [0.19607843137254902,0.18823529411764706,0.18823529411764706,1],
 "grid2": [0.7607843137254902,0.5843137254901961,0.27058823529411763,1]
},
"grecianholiday":{
 "name": "Grecian Holiday",
 "color": [0.12549019607843137,0.5803921568627451,0.5450980392156862,1],
 "bg": [0.1607843137254902,0.5333333333333333,0.7372549019607844,1],
 "grid1": [0.9568627450980393,0.9176470588235294,0.8705882352941177,1],
 "grid2": [0.9294117647058824,0.5490196078431373,0.4470588235294118,1]
},
"greenfields":{
 "name": "Green Fields",
 "color": [0.3215686274509804,0.2901960784313726,0.22745098039215686,1],
 "bg": [0.5686274509803921,0.5882352941176471,0.21176470588235294,1],
 "grid1": [1,0.9803921568627451,0.8823529411764706,1],
 "grid2": [0.35294117647058826,0.37254901960784315,0.21568627450980393,1]
},
"icybluesandgrays":{
 "name": "Icy Blues and Grays",
 "color": [0.7372549019607844,0.7294117647058823,0.7450980392156863,1],
 "bg": [0.9450980392156862,0.9450980392156862,0.9490196078431372,1],
 "grid1": [0.6313725490196078,0.8392156862745098,0.8862745098039215,1],
 "grid2": [0.09803921568627451,0.5843137254901961,0.6784313725490196,1]
},
"lightnatural":{
 "name": "Light & Natural",
 "color": [0.6313725490196078,0.7450980392156863,0.5843137254901961,1],
 "bg": [0.2,0.4196078431372549,0.5294117647058824,1],
 "grid1": [0.9803921568627451,0.9372549019607843,0.8313725490196079,1],
 "grid2": [0.6470588235294118,0.48627450980392156,0.396078431372549,1]
},
"modernurban":{
 "name": "Modern & Urban",
 "color": [0.25882352941176473,0.43137254901960786,0.5254901960784314,1],
 "bg": [0.9764705882352941,0.7294117647058823,0.19607843137254902,1],
 "grid1": [0.9725490196078431,0.9450980392156862,0.8980392156862745,1],
 "grid2": [0.1843137254901961,0.19215686274509805,0.19215686274509805,1]
},
"naturallyelegant":{
 "name": "Naturally Elegant",
 "color": [0.49411764705882355,0.4823529411764706,0.08235294117647059,1],
 "bg": [0.9215686274509803,0.8745098039215686,0,1],
 "grid1": [0.33725490196078434,0.24313725490196078,0.12549019607843137,1],
 "grid2": [0.788235294117647,0.6196078431372549,0.06274509803921569,1]
},
"neonnight":{
 "name": "Neon Night",
 "color": [0.1450980392156863,0.5019607843137255,0.2235294117647059,1],
 "bg": [0.9686274509803922,0.4627450980392157,0.01568627450980392,1],
 "grid1": [0.9607843137254902,0.4235294117647059,0.3411764705882353,1],
 "grid2": [0.13725490196078433,0.10588235294117647,0.07058823529411765,1]
},
"nightlife":{
 "name": "Nightlife",
 "color": [1,0,0.2196078431372549,1],
 "bg": [0,0.8117647058823529,0.9803921568627451,1],
 "grid1": [0.9764705882352941,0.8627450980392157,0.1411764705882353,1],
 "grid2": [0.00784313725490196,0.0196078431372549,0.03529411764705882,1]
},
"outdoorsynatural":{
 "name": "Outdoorsy & Natural",
 "color": [0.2823529411764706,0.4196078431372549,0,1],
 "bg": [0.1803921568627451,0.27450980392156865,0,1],
 "grid1": [0.6352941176470588,0.7725490196078432,0.13725490196078433,1],
 "grid2": [0.49019607843137253,0.26666666666666666,0.15294117647058825,1]
},
"poolparty":{
 "name": "Pool Party",
 "color": [0.3607843137254902,0.7725490196078432,0.9372549019607843,1],
 "bg": [0.20392156862745098,0.30196078431372547,0.5647058823529412,1],
 "grid1": [0.9764705882352941,0.6509803921568628,0.011764705882352941,1],
 "grid2": [0.9058823529411765,0.3333333333333333,0.17254901960784313,1]
},
"primarycolors":{
 "name": "Primary Colors",
 "color": [0.984313725490196,0.396078431372549,0.25882352941176473,1],
 "bg": [0.21568627450980393,0.3686274509803922,0.592156862745098,1],
 "grid1": [1,0.7333333333333333,0,1],
 "grid2": [0.2823529411764706,0.4196078431372549,0,1]
},
"serenespalike":{
 "name": "Serene & Spa-like",
 "color": [0.8862745098039215,0.8745098039215686,0.6352941176470588,1],
 "bg": [0.6313725490196078,0.7450980392156863,0.5843137254901961,1],
 "grid1": [0.5725490196078431,0.6666666666666666,0.7803921568627451,1],
 "grid2": [0.9294117647058824,0.3411764705882353,0.3215686274509804,1]
},
"shadesofcitrus":{
 "name": "Shades of Citrus",
 "color": [0.9764705882352941,0.8627450980392157,0.1411764705882353,1],
 "bg": [0.9215686274509803,0.5411764705882353,0.26666666666666666,1],
 "grid1": [0.29411764705882354,0.4549019607843137,0.2784313725490196,1],
 "grid2": [0.6352941176470588,0.7725490196078432,0.13725490196078433,1]
},
"sleekmodern":{
 "name": "Sleek & Modern",
 "color": [0.6941176470588235,0.8431372549019608,0.8235294117647058,1],
 "bg": [0.00784313725490196,0.10980392156862745,0.11764705882352941,1],
 "grid1": [1,1,1,1],
 "grid2": [0.22745098039215686,0.3176470588235294,0.6,1]
},
"smokypurples":{
 "name": "Smoky Purples",
 "color": [0.4470588235294118,0.4392156862745098,0.4666666666666667,1],
 "bg": [0.7372549019607844,0.7294117647058823,0.7450980392156863,1],
 "grid1": [0.9333333333333333,0.8470588235294118,0.788235294117647,1],
 "grid2": [0.9137254901960784,0.592156862745098,0.5294117647058824,1]
},
"subtleversatile":{
 "name": "Subtle & Versatile",
 "color": [0.7490196078431373,0.8627450980392157,0.8117647058823529,1],
 "bg": [0.17254901960784313,0.2901960784313726,0.3215686274509804,1],
 "grid1": [0.8784313725490196,0.34509803921568627,0.34509803921568627,1],
 "grid2": [0.8352941176470589,0.788235294117647,0.6941176470588235,1]
},
"summerbarbeque":{
 "name": "Summer Barbeque",
 "color": [0.4588235294117647,0.16470588235294117,0.027450980392156862,1],
 "bg": [0.3607843137254902,0.5607843137254902,0.13333333333333333,1],
 "grid1": [0.984313725490196,0.796078431372549,0.4823529411764706,1],
 "grid2": [0.8117647058823529,0.21568627450980393,0.12941176470588237,1]
},
"summersunflower":{
 "name": "Summer Sunflower",
 "color": [0.48627450980392156,0.6666666666666666,0.17647058823529413,1],
 "bg": [0.30196078431372547,0.5215686274509804,0.7411764705882353,1],
 "grid1": [1,0.7333333333333333,0,1],
 "grid2": [0.796078431372549,0.38823529411764707,0.09411764705882353,1]
},
"surfturf":{
 "name": "Surf & Turf",
 "color": [0.8705882352941177,0.47843137254901963,0.13333333333333333,1],
 "bg": [0.9568627450980393,0.8,0.4392156862745098,1],
 "grid1": [0.12549019607843137,0.5803921568627451,0.5450980392156862,1],
 "grid2": [0.41568627450980394,0.6941176470588235,0.5294117647058824,1]
},
"technologymeetsnature":{
 "name": "Technology Meets Nature",
 "color": [0.6392156862745098,0.6470588235294118,0.6,1],
 "bg": [0.984313725490196,0.803921568627451,0.29411764705882354,1],
 "grid1": [0.11764705882352941,0,0,1],
 "grid2": [0.3607843137254902,0.5607843137254902,0.13333333333333333,1]
},
"understatedversatile":{
 "name": "Understated & Versatile",
 "color": [0.788235294117647,0.8196078431372549,0.7843137254901961,1],
 "bg": [0.2,0.3215686274509804,0.3215686274509804,1],
 "grid1": [0.6078431372549019,0.30980392156862746,0.058823529411764705,1],
 "grid2": [0.17647058823529413,0.18823529411764706,0.2,1]
},
"warmcool":{
 "name": "Warm & Cool",
 "color": [0.807843137254902,0.35294117647058826,0.3411764705882353,1],
 "bg": [0.26666666666666666,0.2980392156862745,0.3607843137254902,1],
 "grid1": [0.47058823529411764,0.6470588235294118,0.6392156862745098,1],
 "grid2": [0.8823529411764706,0.6941176470588235,0.41568627450980394,1]
},
"warmrustic":{
 "name": "Warm & Rustic",
 "color": [0.9921568627450981,0.592156862745098,0.30980392156862746,1],
 "bg": [0.996078431372549,0.9490196078431372,0.8941176470588236,1],
 "grid1": [0.7764705882352941,0,0,1],
 "grid2": [0.5019607843137255,0.35294117647058826,0.23137254901960785,1]
},
"winteryreds":{
 "name": "Wintery Reds",
 "color": [0.8431372549019608,0.17254901960784313,0.08627450980392157,1],
 "bg": [0.9254901960784314,0.5882352941176471,0.6431372549019608,1],
 "grid1": [0.9411764705882353,0.9372549019607843,0.9176470588235294,1],
 "grid2": [0.7529411764705882,0.6980392156862745,0.7098039215686275,1]
}
}
`)
