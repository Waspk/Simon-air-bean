export const fetchProducts = () => async (dispatch) => {
  const response = await fetch("http://localhost:5000/api/beans");
  const data = await response.json();
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: data.menu,
  });
};
