import { ActionTypes } from "./action-types";
import SensorService from "../services/SensorService";

export const listSensors = () => async (dispatch) => {
  try {
    const res = await SensorService.list();
    dispatch({
      type: ActionTypes.LIST_SENSORS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const toggle = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.TOGGLE_LOADING,
      payload: {},
    });
    return Promise.resolve({});
  } catch (err) {
    return Promise.reject(err);
  }
};
