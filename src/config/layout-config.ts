import { NavigatorProps } from "../model/NavigatorProps";
export const layoutConfig: NavigatorProps = {
    routes: [
        { label: 'Login', path: '/' },
        { label: 'Logout', path: '/logout' },
        { label: 'Employees', path: '/employees' },
        { label: 'Add Employees', path: '/add' },
        { label: 'Age Statistics', path: '/statistics/age' },
        { label: 'Salary Statistics', path: '/statistics/salary' }

    ],
    flAdmin: true,
    flAuth: true
}