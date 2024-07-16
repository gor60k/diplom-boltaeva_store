import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routes';
import Shop from '../pages/Shop/Shop';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    // const isAuth = false
    const {user} = useContext(Context)

    // console.log(user);
    return (
        <>
            <Routes>
                {user.isAuth === true && privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />}></Route>
                )}
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />}></Route>
                )}
                <Route path='*' element={<Shop />}></Route>
            </Routes>
        </>
    )
})

export default AppRouter

