
let img;

let data = [];
let lines = [];
let file = 'fox';

function preload() {
  img = loadImage(`assets/${file}.jpg`);
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(0);

    img.filter("gray");
    img.resize(canvasWidth, 0);
    img.loadPixels();
    
    let d = pixelDensity();
    let pixels = img.pixels;
    let width = img.width;
    let height = img.height;
    let rowHeight = Math.floor(img.height * 1.75 / rows);
    
    for (let r = 0; r < rows; r++) {
        let start = r * width * rowHeight * d;
        let dataRow = [];
        let prev = pixels[start];
        for (let i = 0; i < (4 * (width * d) * d); i += 4 * skip) {
            // plot the change in the pixel value rather than pixel value itself
            dataRow.push(pixels[start + i] - prev);
            prev = pixels[start + i];
        }
        data.push(dataRow);
    }
    console.log(data);
    img.updatePixels();

    for (let i = 0; i < rows; i++) {
        lines.push(new Line(i, data[i]));
    }
}

function draw() {
    for (l of lines) l.render();
    //image(img, 0, 0);
    textSize(25);
    stroke(0);
    fill(255, 255 ,255);
    text(file, canvasMargin, canvasHeight - canvasMargin + 30);
}