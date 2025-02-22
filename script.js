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

function drawFlower2(canvas, ctx, a) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  ctx.beginPath();
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r = Math.cos(theta) * 13 - Math.sin(theta * a);
    const x = centerX + r * Math.cos(theta) * 10;
    const y = centerY + r * Math.sin(theta) * 10;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r = Math.cos(theta + pi) * 13 - Math.sin((theta + pi) * a);
    const x = centerX + r * Math.cos(theta) * 10;
    const y = centerY + r * Math.sin(theta) * 10;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r = Math.cos(theta + pi / 2) * 13 - Math.sin((theta + pi / 2) * a);
    const x = centerX + r * Math.cos(theta) * 10;
    const y = centerY + r * Math.sin(theta) * 10;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  for (let theta = 0; theta <= Math.PI * 2; theta += 0.01) {
    const r = Math.cos(theta - pi / 2) * 13 - Math.sin((theta - pi / 2) * a);
    const x = centerX + r * Math.cos(theta) * 10;
    const y = centerY + r * Math.sin(theta) * 10;

    theta === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.strokeStyle = "rgb(238, 195, 3)";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();
}

function drawHeart(canvas, ctx) {}

function draw() {
  const canvas = document.getElementById("flower");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillRect(10, 20, 30, 40);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    drawFlower2(canvas, ctx, 9);
  }
}
