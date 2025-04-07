import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function HeaderCom({ onLogout, isLoggedIn, user }) {
    return (<>
    <header>        
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/list">LIST</Link> &nbsp;
        {isLoggedIn ? (
            <>
                <Link to="/" onClick={onLogout}>LOGOUT</Link> &nbsp;
                <span>{user}님 로그인 상태</span>
            </>
        ) : (
            <Link to="/login">LOGIN</Link>
        )}
    </header>
    <main>
        <Outlet/>
    </main>
    </>);
}

export default HeaderCom;