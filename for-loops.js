console.log("test")

let NoCount = 5;
for (NoCount = 5; NoCount <= 120; NoCount += 10) {
    console.log(NoCount);

}

let Number;

for (Number = 4096; Number >= 1; Number /= 2) {
    console.log(Number);

}

let President = ["George Washington",
"John Adams",
"Thomas Jefferson",
"James Monroe",
];


President.forEach(function (President, index) {
    console.log(`President # ${index + 1} was ${President}`);
})