float xstart, xnoise, ystart, ynoise;
float xstartNoise, ystartNoise;
void setup() {
  size(256, 256);
  smooth();
  xstartNoise = random(1000);
  ystartNoise = random(20);
  float xstart = random(1000);
  float xnoise = xstart;
  float ynoise = random(1000);
}
void draw() {
  background(10, 89, 158);
  frameRate(60);
  xstartNoise += 0.01;
  ystartNoise += 0.01;
  xstart +=(noise(xstartNoise)*0.5)-0.25;
  ystart +=(noise(ystartNoise)*0.5)-0.25;
  xnoise = xstart;
  ynoise = ystart;
  for (int y=0; y<=height; y+=7) {
    ynoise +=.2;
    xnoise= xstart;
    for (int x=0; x<=width; x+=6) {
      xnoise+=0.1;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}
void drawPoint(float x, float y, float noiseFactor) {
  pushMatrix();
  translate(x, y);
  rotate(noiseFactor*radians(360));
  stroke(11, 226, 83, 155);
  line(0, 0, 20, 20);
  popMatrix();
}