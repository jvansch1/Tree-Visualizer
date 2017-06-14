function jqueryEvents() {
  document.addEventListener("DOMContentLoaded", () => {
    let canvas = $('canvas')[0]
    let ctx = canvas.getContext('2d')

    $('#add-node-button').on('click', (e) => {
      ctx.fillStyle = 'green';
      ctx.fillRect(300,50,50,50)
    })







  })
}
