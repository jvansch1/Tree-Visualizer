function jqueryEvents() {
  document.addEventListener("DOMContentLoaded", () => {
    let canvas = $('canvas')[0]
    let ctx = canvas.getContext('2d')
    let tree = $('body').data('tree');



    $('#add-node-button').on('click', (e) => {
      ctx.fillStyle = 'green';
      ctx.beginPath();
      ctx.arc(200,50, 20, 0, Math.PI * 2, true);
      ctx.fill();
    })







  })
}
