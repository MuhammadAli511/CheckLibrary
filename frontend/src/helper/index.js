const API_URL = "http://localhost:3000/api";

const getToken = () => {
    return JSON.parse(localStorage.getItem('profile')).token;
};

const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    };
};

export const googleSignUp = async ( firstName, lastName, email, timeZone ) => {
    const response = await fetch(`${API_URL}/userRoute/googleSignUp`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ firstName, lastName, email, timeZone }),
    });
    return await response.json();
};

export const signup = async ( firstName, lastName, email, password, defaultTimeZoneCode ) => {
    const response = await fetch(`${API_URL}/userRoute/signup`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ firstName, lastName, email, password, defaultTimeZoneCode }),
    });
    return await response.json();
}

export const login = async ( email, password ) => {
    const response = await fetch(`${API_URL}/userRoute/login`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

export const SendPasswordResetEmail = async ( email ) => {
    const response = await fetch(`${API_URL}/userRoute/SendEmailforPasswordReset`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email }),
    });
    return await response.json();
}

export const ChangePasswordonReset = async ( new_password, confirm_password, token ) => {
    const response = await fetch(`${API_URL}/userRoute/ChangePasswordonReset`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ new_password, confirm_password, token }),
    });
    return await response.json();
}

export const fetchUserDetails = async (email) => {
    const response = await fetch(`${API_URL}/userRoute/fetchUserDetails`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email }),
    });
    return await response.json();
}

export const updateTheme = async (theme) => {
    const response = await fetch(`${API_URL}/userRoute/updateTheme`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ theme }),
    });
    return await response.json();
}

export const updateProfile = async (position, phoneNumber, website, bio) => {
    const response = await fetch(`${API_URL}/userRoute/updateProfile`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ position, phoneNumber, website, bio }),
    });
    return await response.json();
}

export const updatePersonalInfo = async (firstName, lastName, dob, timeZone) => {
    const response = await fetch(`${API_URL}/userRoute/updatePersonalInfo`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ firstName, lastName, dob, timeZone }),
    });
    return await response.json();
}

export const updateSingleColor = async (property, color, theme) => {
    const response = await fetch(`${API_URL}/userRoute/updateSingleColor`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ property, color, theme }),
    });
    return await response.json();
}

export const updateDateTimeValues = async (weekStartOn, dateFormat, timeFormat) => {
    const response = await fetch(`${API_URL}/userRoute/updateDateTimeValues`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ weekStartOn, dateFormat, timeFormat }),
    });
    return await response.json();
}

export const changePassword = async (currentPassword, newPassword, confirmPassword) => {
    const response = await fetch(`${API_URL}/userRoute/changePassword`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
    });
    return await response.json();
}