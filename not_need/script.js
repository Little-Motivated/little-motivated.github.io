const pi = Math.PI;

function drawFlower1(canvas, ctx) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  ctx.beginPath();
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r = Math.sin(6 * theta);
    const x = centerX + r * Math.cos(theta) * 100;
    const y = centerY + r * Math.sin(theta) * 100;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.strokeStyle = "rgb(238, 195, 3)";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();
}

function drawFlower2(canvas, ctx, a, b) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const scale = 7;

  ctx.beginPath();
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r = Math.cos(theta * b) * 13 - Math.sin(theta * a) * 5;
    const x = centerX + r * Math.cos(theta) * scale;
    const y = centerY + r * Math.sin(theta) * scale;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r = Math.cos((theta + pi) * b) * 13 - Math.sin((theta + pi) * a) * 5;
    const x = centerX + r * Math.cos(theta) * scale;
    const y = centerY + r * Math.sin(theta) * scale;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r =
      Math.cos((theta + pi / 2) * b) * 13 - Math.sin((theta + pi / 2) * a) * 5;
    const x = centerX + r * Math.cos(theta) * scale;
    const y = centerY + r * Math.sin(theta) * scale;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r =
      Math.cos((theta - pi / 2) * b) * 13 - Math.sin((theta - pi / 2) * a) * 5;
    const x = centerX + r * Math.cos(theta) * scale;
    const y = centerY + r * Math.sin(theta) * scale;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "hsl(70, 100.00%, 90.20%)";
  ctx.strokeStyle = "rgb(255, 174, 0)";
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();
}

function drawHeart(canvas, ctx) {}

function draw() {
  const canvas = document.getElementById("flower");
  //a = document.getElementById("get-parameter-a");
  //b = document.getElementById("get-parameter-b");
  a = 10
  b = 1
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    //drawFlower2(canvas, ctx, a, b);
  }
}
