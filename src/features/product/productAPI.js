// A mock function to mimic making an async request for data
export function fetchProductsByFilters(filter, sort, pagination, admin) {
  // for (let key in filter) {
  //   const categoryValues = filter[key];
  //   if (categoryValues.length > 0) {
  //     const lastcategoryValue = categoryValues[categoryValues.length - 1];
  //     queryString += `${key}=${lastcategoryValue}&`;
  //   }
  //   // queryString = `${key}=${filter[key]}&`;
  // }
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if (admin) {
    queryString += `admin=true`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch("/products?" + queryString + "isAdmin=true");
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");

    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("/brands");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`/products/${id}`);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(formData) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(formData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`/products/${formData.id}`, {
      method: "PATCH",
      body: formData,
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
