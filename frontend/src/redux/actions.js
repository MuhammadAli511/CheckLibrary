import { SET_THEME } from "../constants/actiontypes";
import { setProjectsTab, setSettingTab, setTasksTab } from "./slice";

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

export const setProjectsTabAction = (tab) => {
    return (dispatch) => {
        dispatch(setProjectsTab(tab));
    }
}