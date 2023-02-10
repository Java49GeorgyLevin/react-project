import { NavigatorProps } from "./NavigatorProps";

export const productsConfig: NavigatorProps = {
    CssClassName: 'navigator-subList',
    arRoutePathLabel: [{routingPath: '/products/dairy', label: 'DairyProducts'},
    {routingPath: '/products/bread', label: 'BreadProducts'}]
}