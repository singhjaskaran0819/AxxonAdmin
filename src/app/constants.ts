export const APIS = {
    REGISTRATION: '/api/users',
    SIGN_OUT: '/api/users/sign_out',
    SIGN_IN: '/api/users/sign_in'
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