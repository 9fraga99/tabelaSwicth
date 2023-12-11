function calculateTotal() {
    const product = document.getElementById("product").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);

    let price;
    switch (product) {
      case "p1":
        price = 10;
        break;
      case "p2":
        price = 20;
        break;
      case "p3":
        price = 30;
        break;
      default:
        price = 0;
    }

    const total = price * quantity;

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Total para ${quantity} ${product}: R$${total.toFixed(2)}`;

    // Limpar campos
    document.getElementById("product").selectedIndex = 0;
    document.getElementById("quantity").value = 1;
  }