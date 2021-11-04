// Create a new promise which will resolve after 5 seconds with a string value


function resolveAfter5Seconds() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(console.log("Hello World"));
        }, 5000);
      });
    }

// resolveAfter5Seconds();

// Create a new promise which will be rejected after 3 seconds with a new Error

function rejectAfter3Seconds() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("rejected");
      }, 3000);
    });
  }

//   rejectAfter3Seconds()

