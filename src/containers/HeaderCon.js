import HeaderCom from '../components/HeaderCom';
import { useAuth } from '../store/AuthContext';

function HeaderCon() {
    const { user, logout } = useAuth();
    
    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    };

    return (<><HeaderCom isLoggedIn={!!user}
                        user={user ? user.id : null} 
                        onLogout={handleLogout} /></>);
}
export default HeaderCon;