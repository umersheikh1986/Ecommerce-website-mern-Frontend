// // export function addToCart(item) {
// //   return new Promise(async (resolve) => {
// //     const response = await fetch("/cart", {
// //       method: "POST",
// //       body: JSON.stringify(item),
// //       headers: { "content-type": "application/json" },
// //     });
// //     const data = await response.json();
// //     // TODO: on server it will only return some info of user (not password)
// //     resolve({ data });
// //   });
// // }

// // // export function addToCart(item) {
// // //   return new Promise(async (resolve, reject) => {
// // //     try {
// // //       const response = await fetch("/cart", {
// // //         method: "POST",
// // //         body: JSON.stringify(item),
// // //         headers: { "Content-Type": "application/json" },
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error(`HTTP error! Status: ${response.status}`);
// // //       }

// // //       const data = await response.json();
// // //       // Assuming the server returns some user info (excluding password)
// // //       resolve({ data });
// // //     } catch (error) {
// // //       reject(`Failed to add item to cart: ${error.message}`);
// // //     }
// // //   });
// // // }

// // export function fetchItemsByUserId() {
// //   return new Promise(async (resolve) => {
// //     //TODO: we will not hard-code server URL here
// //     const response = await fetch("/cart");
// //     const data = await response.json();
// //     resolve({ data });
// //   });
// // }

// // export function updateCart(update) {
// //   return new Promise(async (resolve) => {
// //     const response = await fetch("/cart/" + update.id, {
// //       method: "PATCH",
// //       body: JSON.stringify(update),
// //       headers: { "content-type": "application/json" },
// //     });
// //     const data = await response.json();
// //     // TODO: on server it will only return some info of user (not password)
// //     resolve({ data });
// //   });
// // }

// // export function deleteItemFromCart(itemId) {
// //   return new Promise(async (resolve) => {
// //     const response = await fetch(`/cart/${itemId}`, {
// //       method: "DELETE",
// //       headers: { "content-type": "application/json" },
// //     });
// //     const data = await response.json();
// //     // TODO: on server it will only return some info of user (not password)

// //     resolve({ data: { id: itemId } });
// //   });
// // }

// // export function resetCart() {
// //   // get all items of user's cart - and then delete each
// //   return new Promise(async (resolve) => {
// //     const response = await fetchItemsByUserId();
// //     const items = response.data;
// //     for (let item of items) {
// //       await deleteItemFromCart(item.id);
// //     }
// //     resolve({ status: "success" });
// //   });
// // }
// export function addToCart(item) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("/cart", {
//       method: "POST",
//       body: JSON.stringify(item),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// export function fetchItemsByUserId(item) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("/cart");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// export function updateCart(update) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("/cart/" + update.id, {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// export function deleteItemFromCart(itemId) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("/cart/" + itemId, {
//       method: "DELETE",
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     resolve({ data: { id: itemId } });
//   });
// }

// export function resetCart() {
//   // get all items of user's cart - and then delete each
//   return new Promise(async (resolve) => {
//     const response = await fetchItemsByUserId();
//     const items = response.data;
//     for (let item of items) {
//       await deleteItemFromCart(item.id);
//     }
//     resolve({ status: "success" });
//   });
// }
export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart");
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  // get all items of user's cart - and then delete each
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
