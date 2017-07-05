let canvas = document.getElementById('clock');
let ctx    = canvas.getContext('2d');

function clock() { 
  let date   = new Date();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round'
  ctx.translate(150,150);
  ctx.rotate(-Math.PI);
  ctx.save();
  
  // часовые деления
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(0, 100);
    ctx.lineTo(0, 125);
    ctx.stroke();
  }
    ctx.restore();
  
  //минутные деления
  ctx.save();
  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 30);
    ctx.moveTo(0, 120);
    ctx.lineTo(0,125);
    ctx.stroke();
  }
    ctx.restore();
  
  var sec = date.getSeconds();
  var min = date.getMinutes();
  var hr  = date.getHours();
  
  hr = hr >= 12 ? hr - 12 : hr;
  // часовая стрелка
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 15;
  ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
  ctx.moveTo(0, 0);
  ctx.lineTo(0,60);
  ctx.stroke();
  ctx.restore();
  
  //минутная стрелка
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.moveTo(0, 0);
  ctx.lineTo(0,90);
  ctx.stroke();
  ctx.restore();
  
  //Секундная стрелка
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(0, 0, 5, 0, Math.PI * 2)
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.strokeStyle = 'red'
  ctx.rotate(sec * Math.PI / 30);
  ctx.moveTo(0, 0);
  ctx.lineTo(0,110);
  ctx.stroke()
  ctx.restore();
  
  // Окружность часов
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'red';
  ctx.arc(0, 0, 140, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.restore();
  
  ctx.restore();
  window.requestAnimationFrame(clock);
} 
window.requestAnimationFrame(clock);



