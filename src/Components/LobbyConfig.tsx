import './LobbyConfig.css';

interface LobbyConfigProps {
    setup: boolean;
    handleClick: () => void;
}

const LobbyConfig = ({setup, handleClick}: LobbyConfigProps) => {
    return (
        <section className='lobby-config'>
            <button onClick={handleClick}>{setup ? 'Join Lobby Instead' : 'Create New Lobby Instead'}</button>
            <br />
            <br />
            <input type='text' placeholder={`${setup ? "Your Name" : "Lobby Code"}`}></input>
        </section>
    );
}

export default LobbyConfig;