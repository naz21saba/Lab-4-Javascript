
let number = 11;
let next = number + 1;

while (true) {
    let isPrime = true;

    for (let i = 2; i < next; i++) {
        if (next % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime == true) {
        console.log("Next prime number is: " + next);
        break;
    }

    next++;
}
