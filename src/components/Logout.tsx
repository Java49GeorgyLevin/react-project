import { authActions } from "../redux/authSlice";
import { userNameActions } from "../redux/usernameSlice";
import {useDispatch} from 'react-redux'
export const Logout: React.FC = ()=>{
    const dispatch = useDispatch();
    return <button onClick={() => {
        dispatch(authActions.logout());
        dispatch(userNameActions.logout())
        }}>Logout</button>
}