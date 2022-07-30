import './LobbyConfig.css';

interface LobbyConfigProps {
    setup: boolean;
    handleClick: () => void;
}

const LobbyConfig = ({setup, handleClick}: LobbyConfigProps) => {
    return (
        <section className='lobby-config'>
            <button onClick={handleClick}>{setup ? 'Join Lobby' : 'Create New Lobby'}</button>
            <br />
            <br />
            <input type='text' placeholder={`${setup ? "Your Name" : "Lobby Code"}`}></input>
        </section>
    );
}

export default LobbyConfig;