let factor = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(35);
  stroke(255)
  let points = 100
  translate(width/2, height/2)
  for (let i=0; i < points; i++){
    let angle = i * 2 * PI / points
    let x = 180 * cos(angle)
    let y = 180 * sin(angle)
    circle(x, y, 5)
    let x2 = 180 * cos(angle * factor)
    let y2 = 180 * sin(angle * factor)
    line(x, y, x2, y2)
  }
  factor += 0.01
}
