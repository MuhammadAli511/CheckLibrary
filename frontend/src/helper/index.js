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
    const response = await fetch(`${API_URL}/employeeRoute/googleSignUp`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ firstName, lastName, email, timeZone }),
    });
    return await response.json();
};

export const signup = async ( firstName, lastName, email, password ) => {
    const response = await fetch(`${API_URL}/employeeRoute/signup`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ firstName, lastName, email, password }),
    });
    return await response.json();
}

export const login = async ( email, password ) => {
    const response = await fetch(`${API_URL}/employeeRoute/login`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

export const SendPasswordResetEmail = async ( email ) => {
    const response = await fetch(`${API_URL}/employeeRoute/SendEmailforPasswordReset`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email }),
    });
    return await response.json();
}

export const ChangePasswordonReset = async ( new_password, confirm_password, token ) => {
    const response = await fetch(`${API_URL}/employeeRoute/ChangePasswordonReset`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ new_password, confirm_password, token }),
    });
    return await response.json();
}

export const fetchEmployeeDetails = async (email) => {
    const response = await fetch(`${API_URL}/employeeRoute/fetchEmployeeDetails`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email }),
    });
    return await response.json();
}

export const updateTheme = async (theme) => {
    const response = await fetch(`${API_URL}/employeeRoute/updateTheme`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ theme }),
    });
    return await response.json();
}

export const updateProfile = async (position, phoneNumber, website, bio) => {
    const response = await fetch(`${API_URL}/employeeRoute/updateProfile`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ position, phoneNumber, website, bio }),
    });
    return await response.json();
}

export const updatePersonalInfo = async (firstName, lastName, dob, timeZone) => {
    const response = await fetch(`${API_URL}/employeeRoute/updatePersonalInfo`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ firstName, lastName, dob, timeZone }),
    });
    return await response.json();
}

export const updateSingleColor = async (property, color, theme) => {
    const response = await fetch(`${API_URL}/employeeRoute/updateSingleColor`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ property, color, theme }),
    });
    return await response.json();
}