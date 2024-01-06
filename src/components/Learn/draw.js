export function drawCfrg(canvas) {
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

export function drawStupefy(canvas) {
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

export function drawExplShape(canvas) {
  const ctx = canvas.getContext("2d");
  const margin = canvas.width * 0.15;
  const baseHeight = canvas.height * 0.8;
  const peakHeight = canvas.height * 0.2;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#1e90ff";
  ctx.lineWidth = canvas.width * 0.0125;

  ctx.beginPath();
  ctx.moveTo(margin, baseHeight);
  ctx.lineTo(canvas.width / 2, peakHeight);
  ctx.lineTo(canvas.width - margin, baseHeight);
  ctx.stroke();
}

export function drawObliviate(canvas) {
  const ctx = canvas.getContext("2d");
  const margin = canvas.width * 0.1;
  const centerY = (canvas.height / 5) * 2.25;
  const radius = canvas.width * 0.15;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#1e90ff";
  ctx.lineWidth = canvas.width * 0.0125;

  ctx.beginPath();
  ctx.moveTo(margin, (canvas.height / 5) * 3);
  ctx.lineTo(canvas.width - margin, (canvas.height / 5) * 3);
  ctx.moveTo(canvas.width / 2 + radius, centerY);
  ctx.arc(canvas.width / 2, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

export function drawBombarda(canvas) {
  const ctx = canvas.getContext("2d");
  const margin = canvas.width * 0.15;
  const baseHeight = canvas.height * 0.8;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#1e90ff";
  ctx.lineWidth = canvas.width * 0.0125;

  ctx.beginPath();
  ctx.moveTo(margin, baseHeight);
  ctx.lineTo(margin, baseHeight / 2);
  ctx.lineTo(canvas.width - margin, baseHeight / 2);
  ctx.stroke();
}
