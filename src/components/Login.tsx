import { authActions } from "../redux/authSlice";
import { useDispatch } from 'react-redux'
import { Input } from "./Input";
export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    return <div>
    <button onClick={() => dispatch(authActions.login())}>Login</button>
    </div>
}