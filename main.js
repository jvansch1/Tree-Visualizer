function main() {
  document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("main")
    let ctx = canvas.getContext('2d')
    let tree = $('body').data('tree');

    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;

    ctx.beginPath();
    // x, y, radius, start angle, end angle, counter-clockwise
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = 'red';
    ctx.fill();
  })
}
