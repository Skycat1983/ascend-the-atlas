export const setData = async (url: any, dispatch: any) => {
  console.log("url :>> ", url);
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log("results :>> ", results);
    if (results.error) {
      dispatch({
        type: "SET_ERROR",
        payload: results.error,
      });
    } else {
      console.log("in dispatch");
      dispatch({
        type: "SET_FETCH_RESULT",
        payload: results,
      });
    }
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
  } catch (error) {
    console.log(error);
    // setError(error as ErrorInterface);
    // setLoading(false);
  }
};
