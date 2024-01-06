export function drawZShape(canvas) {
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#1e90ff";
  ctx.lineWidth = canvas.width * 0.0125; // Example: 5% of canvas width

  const margin = canvas.width * 0.125; // Example: 12.5% of canvas width
  const lineLength = canvas.width - 2 * margin;

  ctx.beginPath();
  ctx.moveTo(margin, margin);
  ctx.lineTo(margin + lineLength, margin);
  ctx.lineTo(margin, margin + lineLength);
  ctx.lineTo(margin + lineLength, margin + lineLength);
  ctx.stroke();
}

export function drawOShape(canvas) {
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#1e90ff";
  ctx.lineWidth = canvas.width * 0.0125; // Example: 5% of canvas width

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = canvas.width * 0.4; // Example: 25% of canvas width

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();
}
