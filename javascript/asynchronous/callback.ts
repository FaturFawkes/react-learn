// Callback -> a function called after do a proccess (called after process done)

// Example 1

const buyer = (message: string, price: number) => {
  console.log(message + ": " + price);
};

const seller = (callback: (message: string, price: number) => void) => {
  console.log("Pesan martabak dong? ... (wait sedang dimaasak ya)")
  setTimeout(() => {
    callback("Martabak sudah selesai kaka. Total harga jadi", 3000)
  }, 5000)
}
seller(buyer)