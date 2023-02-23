import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import { layoutConfig } from './config/layout-config';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import './App.css'
import { useSelector } from 'react-redux';
import { RouteType } from './model/RouteType';

function App() {
    const authUser = useSelector<any, string>(state => state.auth.authenticated);
    const [routes, setRoutes] = React.useState(layoutConfig.routes.filter(r => r.label == 'Login'));
    useEffect(() => {
        if(authUser === '') {
            setRoutes(layoutConfig.routes.filter(r => r.label == 'Login'))
        } else {
            const routUser: RouteType | undefined = layoutConfig.routes.find(r => r.path.includes('logout'));
            routUser!.label = authUser;
                if(!authUser.includes('admin')) {            
                    setRoutes(layoutConfig.routes.filter(r =>  
                        ( r.label != 'Add Employees' && r.label != 'Login')
                    ))
                } else {
                    setRoutes(layoutConfig.routes.filter(r => r.label != 'Login' ))
        }
    }
    }, [authUser]
        );

  return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigator routes={routes} 
           flAdmin={layoutConfig.flAdmin} flAuth={layoutConfig.flAuth}/>}>
              <Route path='employees' element={<Employees/>} />
              <Route path='add' element={<AddEmployee/>} />
              <Route path='statistics/age' element={<AgeStatistics/>} />
              <Route path='statistics/salary' element={<SalaryStatistics/>} />
              <Route index element={<Login/>} />
              <Route path='logout' element={<Logout/>} />           
          </Route>
      </Routes>
  </BrowserRouter>

}
export default App;