//Input from CLI.
const args = process.argv;

//Map for Mapping Integer to Repective String.
let map = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero"
};

//helper Functions
function getResultString(input) {
    let results = [];

    for (let i = 2; i < input.length; i++)
        results.push(generateStringFromInteger(input[i]));


    return results;
}

function generateStringFromInteger(num) {
    let output="";
    
    if (num == 0) return "Zero";
    
    while (num != 0) {
        let temp = num % 10;
        num = parseInt(num / 10);
        output = map[temp] + output;
    }
    
    return output;

}

// Executing the function to get the result array;
let result = getResultString(args);


// printing std output of result Array. 
for (let i = 0; i < result.length; i++)
    if (i != result.length - 1)
        process.stdout.write(result[i] + ",");
    else
        process.stdout.write(result[i]);

