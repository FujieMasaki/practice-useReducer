import { requestStates } from "../contents";

export type ActionTypes = {
  initial: string;
  fetch: string;
  success: string;
  error: string;
};

//reducerに渡す、また内部で参照する文字列
export const actionTypes: ActionTypes = {
  initial: "INITIAL",
  fetch: "FETCHING",
  success: "FETCH_SUCCESS",
  error: "FETCH_ERROR",
};
