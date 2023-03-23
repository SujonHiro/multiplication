function multiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        var products = num + " * " + i + " = " + num * i;
        console.log(products);
    }
}
multiplicationTable(20)