import { ActionTypes } from "../actions/action-types";
import moment from "moment";

const initialState = {
  sensors: [],
  loading: false,
};

function sensorReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.TOGGLE_LOADING:
      return { ...state, loading: !state.loading, ...payload };
    case ActionTypes.LIST_SENSORS:
      const data = payload.map((sensor) => ({
        ...sensor,
        date: moment(sensor.date).format("L-LT"),
      }));
      return { ...state, loading: false, sensors: data };
    case ActionTypes.LIST_TODAYS_SENSORS:
      const filteredData = payload.filter((element) =>
        moment(element.date).isSame(moment(), "day")
      );
      return { ...state, loading: false, sensors: filteredData };
    case ActionTypes.LIST_LAST_MONTH_SENSORS:
      const filteredMonthData = payload.filter((element) =>
        moment(element.date).isSame(moment(), "month")
      );
      return { ...state, loading: false, sensors: filteredMonthData };

    default:
      return state;
  }
}
export default sensorReducer;
