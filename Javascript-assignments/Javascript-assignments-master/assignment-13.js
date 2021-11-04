// NOTE: Use destructuring for the tasks given below

// This is some arbitrary api response
// You have to extract out the functions json and text from it.
// call the functions and print all the properties present in the properties object

const someArbitraryApiResponse = {
  data: {
    json: () => ({
      words: ["Hello", "Hi"],
      properties: {
        success: true,
      },
    }),
    text: () => ({
      numbers: [1, 2, 3, 5, 6],
      properties: {
        sorted: true,
        length: 5,
      },
    }),
  },
};



const {
  data : {json,text}
} = someArbitraryApiResponse




const a = {
  name: "John",
};
/// ======================
// Correct the code so that the b.name should not equal to a.name

const b = {...a}
b.name = "Doe";

/// ======================
console.log(b.name === a.name); // this is should print false
