function sumNumbers(input) {
    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < n) {
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    let a = 12;
    let b = 7;

    console.log(sum);
}