function primeNumber(number) {
    if (number < 2) return false;
    for (var i = 2; i < number; i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}

for (var i = 2; i <= 20; i++) {
    if (primeNumber(i)) console.log(i);
}