import Category from "../../models/category";

export const SET_CATEGORIES = "SET_CATEGORIES";
// export const CREATE_CATEGORY = "CREATE_CATEGORY";
// export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
// export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/category");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedCategories = [];

      for (const key in resData) {
        loadedCategories.push(
          new Category(
            key,
            resData[key].categoryName,
            resData[key].categoryImageUrl,
            resData[key].recipes
          )
        );
      }

      dispatch({ type: SET_CATEGORIES, categories: loadedCategories });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

// export const createCategory = (title, imageUrl) => {
//   return async (dispatch) => {
//     // Run async code here
//     const response = await fetch("http://localhost:8080/category", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         imageUrl,
//       }),
//     });

//     const resData = response.json();
//     console.log(resData);

//     // Dispatch
//     dispatch({
//       type: CREATE_CATEGORY,
//       categoryData: { id: resData.name, title, imageUrl },
//     });
//   };
// };
