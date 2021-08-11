function solve() {

   const uniqueProducts = [];

   const productsPrices = [];

   const textArea = document.querySelector('textarea');

   const btnElmts = Array.from(document.querySelectorAll('.add-product'));

   btnElmts.map(e => e.addEventListener('click', onClick));

   document.querySelector('.checkout').addEventListener('click', onCheckout);

   function onClick(ev) {

      const parentDivEl = ev.target.parentNode.parentNode;

      const productName = parentDivEl.querySelector('.product-title').textContent;

      const productPrice = Number(parentDivEl.querySelector('.product-line-price').textContent);

      if (!uniqueProducts.includes(productName)) {

         uniqueProducts.push(productName);

      }

      productsPrices.push(productPrice);

      textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

   }

   function onCheckout(ev) {

      textArea.value += `You bought ${uniqueProducts.join(', ')} for ${productsPrices.reduce((acc, c) => acc + c, 0).toFixed(2)}.`;

      btnElmts.map(e => e.disabled = true);

      ev.target.disabled = true;

   }

}