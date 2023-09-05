export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                // Primary Light Theme Colors
                'primary-light': 'var(--primary-light-primary, #079263)',
                'text-light': 'var(--primary-light-text, #110011)',
                'background-light': 'var(--primary-light-background, #FFFFFF)',
                'background2-light': 'var(--primary-light-background2, #DCDCDC)',
                'warning-light': 'var(--primary-light-warning, #EC5453)',

                // Primary Dark Theme Colors
                'primary-dark': 'var(--primary-dark-primary, #F44A26)',
                'text-dark': 'var(--primary-dark-text, #FFFFFF)',
                'background-dark': 'var(--primary-dark-background, #261E35)',
                'background2-dark': 'var(--primary-dark-background2, #2E293E)',
                'warning-dark': 'var(--primary-dark-warning, #EC5453)',

                // Secondary Light Theme Colors
                'status-light': 'var(--secondary-light-status, #E2E2E2)',
                'status1-light': 'var(--secondary-light-status1, #F4B1A9)',
                'status2-light': 'var(--secondary-light-status2, #B7CEFF)',
                'status3-light': 'var(--secondary-light-status3, #B7F8FF)',

                // Secondary Dark Theme Colors
                'status-dark': 'var(--secondary-dark-status, #E2E2E2)',
                'status1-dark': 'var(--secondary-dark-status1, #F4B1A9)',
                'status2-dark': 'var(--secondary-dark-status2, #B7CEFF)',
                'status3-dark': 'var(--secondary-dark-status3, #B7F8FF)',
            },

            // Assuming Text, Background, and Warning can be used for textColor too
            textColor: {
                'primary-light': 'var(--primary-light-primary, #default-primary-color)',
                'text-light': 'var(--primary-light-text, #default-text-color)',
                'warning-light': 'var(--primary-light-warning, #default-warning-color)',

                'primary-dark': 'var(--primary-dark-primary, #default-primary-dark-color)',
                'text-dark': 'var(--primary-dark-text, #default-text-dark-color)',
                'warning-dark': 'var(--primary-dark-warning, #default-warning-dark-color)',

                'status-light': 'var(--secondary-light-status, #default-status-light-color)',
                'status1-light': 'var(--secondary-light-status1, #default-status1-light-color)',
                'status2-light': 'var(--secondary-light-status2, #default-status2-light-color)',
                'status3-light': 'var(--secondary-light-status3, #default-status3-light-color)',

                'status-dark': 'var(--secondary-dark-status, #default-status-dark-color)',
                'status1-dark': 'var(--secondary-dark-status1, #default-status1-dark-color)',
                'status2-dark': 'var(--secondary-dark-status2, #default-status2-dark-color)',
                'status3-dark': 'var(--secondary-dark-status3, #default-status3-dark-color)',
            },

            borderRadius: {
                // Corner Radius for Primary Light and Dark Themes
                'light': 'var(--primary-light-corner-radius, #DCDCDC)',
                'dark': 'var(--primary-dark-corner-radius, #403A54)',
            },

            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
