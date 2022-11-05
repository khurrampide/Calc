const ps = require('prompt-sync');
const prompt = ps({ sigint: true });

function calculator() {
    console.clear();
    console.log("Welcome to the Calculator");
    let n1 = Number(prompt("Enter First Number: "));
    let n2 = Number(prompt("Enter Second Number: "));

    console.log(
        `
1. Add
2. Subtract
3. Divide
4. Multiply
5. Power`
    );

    const choice = prompt("Enter Your Choice: ");
    console.log("---------------------")
    switch (choice) {
        case "1":
            console.log(`${n1} + ${n2} = ${n1 + n2}`);
            break;
        case "2":
            console.log(`${n1} - ${n2} = ${n1 - n2}`);
            break;
        case "3":
            console.log(`${n1} / ${n2} = ${n1 / n2}`);
            break;
        case "4":
            console.log(`${n1} * ${n2} = ${n1 * n2}`);
            break;
        case "5":
            console.log(`${n1} ** ${n2} = ${n1 ** n2}`);
            break;
    }
    console.log("---------------------")
}

do{
    calculator();
    var c = prompt("Do you want to continue (y/n): ");
}while(c=="y");