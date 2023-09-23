import { SET_THEME } from "../constants/actiontypes";
import { setSettingTab, setTasksTab } from "./slice";

export const setSettingTabAction = (tab) => {
    return (dispatch) => {
        dispatch(setSettingTab(tab));
    }
}

export const setTasksTabAction = (tab) => {
    return (dispatch) => {
        dispatch(setTasksTab(tab));
    }
}