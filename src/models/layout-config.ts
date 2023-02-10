import { NavigatorProps } from "./NavigatorProps"
export const layoutConfig: NavigatorProps = {
    CssClassName: 'navigator-list',
    arRoutePathLabel: [{routingPath: '/' , label: 'Home'},
    {routingPath: 'customers' , label: 'Customers'},
    {routingPath: 'orders', label: 'Orders'},
    {routingPath: 'products', label: 'Products'}]
}
