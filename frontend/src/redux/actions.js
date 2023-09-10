import { SET_THEME, UPDATE_PROFILE } from "../constants/actiontypes";
import { setSettingTab, setTasksTab } from "./slice";

export const setUserProfile = (userData) => {
    return {
        type: UPDATE_PROFILE,
        payload: userData,
    };
};

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

export const setThemes = (theme) => async (dispatch) => {
    dispatch({
        type: SET_THEME,
        payload: theme,
    });
};