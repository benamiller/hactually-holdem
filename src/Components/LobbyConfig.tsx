import './LobbyConfig.css';

interface LobbyConfigProps {
    setup: boolean;
    handleClick: () => void;
}

const LobbyConfig = ({setup, handleClick}: LobbyConfigProps) => {
    return (
        <section className='lobby-config'>
            <button onClick={handleClick}>{setup ? 'Join Lobby' : 'Create New Lobby'}</button>
        </section>
    );
}

export default LobbyConfig;