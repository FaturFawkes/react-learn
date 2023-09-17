// Promise -> an object that represents an event that can be fulfilled or rejected based on asynchronous operations and can produce an output.

// --- Example 1

// const promise = new Promise((resolve, reject) => {
//   let condition = true;
//   setTimeout(() => {
//     if (condition === true) {
//       resolve("Task completed successfully!");
//     } else {
//       reject("Task not completely yet!");
//     }
//   }, 3000);
// });

// promise
//   .then((res) => {
//     console.log("result : ", res); // then -> akan dieksekusi jika operasi async dari function promise() berhasil/resolve
//   })
//   .catch((err) => {
//     console.log("error : ", err); // catch -> akan dieksekusi jika operasi async dari function promise() gagal/reject
//   });

// --- Example 2

interface promiseType {
  data: string | null;
  message: string;
}

const bentengTakeshi = new Promise<promiseType>((resolve, reject) => {
  console.log("--- BENTENG TAKESHI MULAI! ---");
  console.log("Doakan aku ya!");
  let score = Math.random() * 100;
  console.log("Perlombaan dimulai ...");
  setTimeout(() => {
    console.log("score : ", score);
    if (score > 70) {
      if (score > 80) {
        resolve({
          data: "Congrats",
          message: "Hoki banget, kamu!",
        });
      } else {
        resolve({
          data: "Congrats",
          message: "Selamat, kamu berhasil menaklukkan benteng takeshi",
        });
      }
    } else {
      reject("error")
    }
  }, 2000);
});

// If it's a promise, it means it's executed within a function to generate its resolve and reject.
// If it's with async await, it means the function is executed first to generate the resolve and reject, and then the results are passed to the await function.

//  Method then & catch
// const playingBentengTakeshi = () => {
//   let strVariable = "";
//   bentengTakeshi
//     .then((result) => {
//       strVariable = result.message;
//       console.log(result.data);
//       console.log(result.message);
//     })
//     .catch((error) => {
//       console.log(error)
//     });
//   console.log(strVariable);
// };
// playingBentengTakeshi()


// Async Await
const playingBentengTakeshi = () => {
  return bentengTakeshi;
};

// Await -> the proccess for pending the async until the end of proccess
const playingAwait = async () => {
  let strVariable = "";
  try {
    const result = await playingBentengTakeshi();
    strVariable = result.message;
    console.log(result)
  } catch (error) {
    console.log(error);
  }
};

playingAwait()