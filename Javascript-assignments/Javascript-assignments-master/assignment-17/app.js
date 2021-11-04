// Refer to this codepen: https://codepen.io/muhammad-hasham-khalid/pen/abpjeEy

/*
  This codepen basically contains a textarea and some javascript is being used to display the WORD count of the text area and also limit the user to only enter 200 words maximum
*/

// You have to study the codepen given above and implement it for
// - letter count <= 200
// - vowels count <= 200

const countLetter = document.getElementById("countLetter");
const countVowel = document.getElementById("countVowel");
const text = document.getElementById("text");

text.addEventListener('input', (e) => {
  const inputVal = e.target.value.split("").map(letter => letter.toLowerCase())
  const vowels = "aeiou"

  let vowelCount = 0;

  inputVal.forEach(element => {
    if (vowels.includes(element)) vowelCount++;
  });

  countVowel.textContent = vowelCount;
})

// text.addEventListener("input", (e) => {
//   const count = e.target.value.split(" ");
  
//   let letterCount = 0;
//   for (var i = 0; i < count.length; i++) {
//     letterCount += count[i].length
//   }

//   if (letterCount <= 200) {
//     text.value = e.target.value;
//     countLetter.textContent = letterCount;
//   } else {
//     const values = e.target.value.trim().split(" ").slice(0, 200);
//     text.value = values.join(" ");
//   }
//   console.log(letterCount);
// });

// console.log(letterCount);