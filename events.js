function jqueryEvents() {
  document.addEventListener("DOMContentLoaded", () => {
    let canvas = $('canvas')[0]
    let ctx = canvas.getContext('2d')
    let tree = $('body').data('tree');
    let root = $('body').data('root');

    $('#add-node-button').on('click', (e) => {

      let newNodeValue = $('#new-node-input')[0].value

      // call addNode method on Tree
      tree.addNode(root, newNodeValue);
      // reset the root of the tree to the new root
      tree.root = root;
      // reset the new root and tree with jquery data function
      $('body').data('tree', tree)
      $('body').data('root', root)

      // ctx.fillStyle = 'green';
      // ctx.beginPath();
      // ctx.arc(200,50, 20, 0, Math.PI * 2, true);
      // ctx.fill();
    })







  })
}
