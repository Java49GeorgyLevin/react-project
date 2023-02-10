import { NavLink, Outlet } from "react-router-dom"
import { NavigatorProps } from "../../models/NavigatorProps"
import './navigators.css'
type NavProps = {
    navigatorConfig: NavigatorProps
}

export const Navigator: React.FC<NavProps> = (props) => {
    function getItemsMenu(): JSX.Element[] {
        return props.navigatorConfig.arRoutePathLabel.map((el) => {
            return <li className='navigator-item'> 
                <NavLink style={({isActive}) => activeLink(isActive)} to={el.routingPath}>{el.label}</NavLink>
            </li>
        })
    }

    function activeLink(isActive: boolean): React.CSSProperties|undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            res = {backgroundColor: "blueviolet", color: "white"}
        }
        return res;
    }

    return <div>
        <nav>
           <ul className={props.navigatorConfig.CssClassName}>
                {getItemsMenu()}
            </ul>
        </nav>
        <Outlet/>
    </div>

}