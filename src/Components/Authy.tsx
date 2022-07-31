import './Authy.css';

interface auth {
    loggedIn: boolean | undefined;
    handleLogIn: () => void;
    handleLogOut: () => void;
}

const Authy = ({loggedIn, handleLogIn, handleLogOut}: auth) => {
    if (loggedIn) {
        return <button className='auth-button' onClick={handleLogOut}>Sign out</button>
    }
    return <button className='auth-button' onClick={handleLogIn}>Sign in</button>
}

export default Authy;
