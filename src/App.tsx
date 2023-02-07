import React from 'react';

import './App.css'
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import {useDispatch, useSelector} from 'react-redux';
import { Input } from './components/Input';
import { userNameActions } from './redux/usernameSlice';
function App() {
  const auth: boolean = useSelector<any, boolean>(state => state.auth.authenticated);
  const username: string | null = useSelector<any, string | null>(state => state.username.userName)
  const admin: boolean = useSelector<any, boolean>(state => state.username.checkAdmin);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);
  const dispatch = useDispatch();
  return <div>
    {auth && admin &&
        <Input placeHolder={'Enter operand'} inputProcess={function (value: string):
         string {
        setOperand(+value);
        return '';
      } }></Input>}
      {auth &&
        <Input placeHolder={'Enter factor'} inputProcess={function (value: string):
         string {
        setFactor(+value);
        return '';
      } }></Input>}
    {auth && <div>
    <CounterUpdater operand={operand}></CounterUpdater>
    <CounterSquare></CounterSquare>
    <CounterMultiply factor={factor}></CounterMultiply>
  </div>}
    {!auth && <Input placeHolder={'Input username'} inputProcess ={function (value: string):
      string {
      dispatch(userNameActions.login(value));
      return '';
  } }></Input>}
    {username && <p>username: {username}</p>}
    {auth && <Logout></Logout>}
    {!auth && username && <Login></Login>}
  </div>

}
export default App;
