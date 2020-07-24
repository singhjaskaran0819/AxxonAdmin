export const APIS = {
    REGISTRATION: '/api/users',
    SIGN_OUT: '/api/users/sign_out',
    SIGN_IN: '/api/users/sign_in'
}

export const REGEX = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
}

export const TOASTR = {
    TOASTR_DELAY: 5000,
    SUCCESS: 'bg-success text-light',
    ERROR: 'bg-danger text-light',
    WARNING: 'bg-warning text-light'
}

export const INTERNAL_PATHS = {
    DASHBOARD: 'dashboard',
    ADMIN: 'admin',
    USERS: 'user',
    EDIT_USER: 'user/:id/edit',
    USER_BY_ID: 'user/:id',
    THERAPISTS: 'therapist',
    THERAPIST_BY_ID: 'therapist/:id',
    EDIT_THERAPIST: 'therapist/:id/edit',
    PARTNERS: 'partner',
    ADD_PARTNER: 'partner/add',
    SPONSORS: 'sponsor',
    ADD_SPONSOR: 'sponsor/add',
    NEWS: 'news',
    ADD_NEWS: 'news/add',
}

export const AUTH_PATHS = {
    SIGN_IN: 'sign-in',
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password',
    RESET_PASSWORD_BY_TOKEN: 'reset-password/:token'
}

export const SIDEBAR_MENU = [
    {
        title: 'Dashboard',
        icon: '',
        link: `${INTERNAL_PATHS.ADMIN}/${INTERNAL_PATHS.DASHBOARD}`
    },
    {
        title: 'Therapists',
        icon: '',
        link: `${INTERNAL_PATHS.ADMIN}/${INTERNAL_PATHS.THERAPISTS}`
    },
    {
        title: 'Users',
        icon: '',
        link: `${INTERNAL_PATHS.ADMIN}/${INTERNAL_PATHS.USERS}`
    },
    {
        title: 'Partners',
        icon: '',
        link: `${INTERNAL_PATHS.ADMIN}/${INTERNAL_PATHS.PARTNERS}`
    },
    {
        title: 'Sponsors',
        icon: '',
        link: `${INTERNAL_PATHS.ADMIN}/${INTERNAL_PATHS.SPONSORS}`
    },
    {
        title: 'News',
        icon: '',
        link: `${INTERNAL_PATHS.ADMIN}/${INTERNAL_PATHS.NEWS}`
    }
]

export const ERROR_MSG = {
    PASSWORD_NOT_MATCHED: 'Passwords not matched'
}

export const SUCCESS_MSG = {
    LOGGED_IN_SUCCESSFULLY: 'Logged in successfully',
    PASSWORD_RESET_SUCCESSFULLY: 'Password reset successfully',
    LINK_SENT: 'Link has been sent succesfully'
}