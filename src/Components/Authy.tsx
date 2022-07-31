import './Authy.css';

interface auth {
    loggedIn: boolean | undefined;
    handleLogIn: () => void;
    handleLogOut: () => void;
}

const Authy = ({loggedIn, handleLogIn, handleLogOut}: auth) => {
    if (loggedIn) {
        return <div className='auth-container' onClick={handleLogOut}>Sign out</div>
    }
    return <div className='auth-container' onClick={handleLogIn}>Sign in</div>
}

export default Authy;
