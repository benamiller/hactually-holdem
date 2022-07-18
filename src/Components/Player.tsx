import './Player.css';

interface PlayerProps {
    name: String;
}

const Player = ({name}: PlayerProps) => {
    return (
        <section className='player'>
            {name}
        </section>
    );
}

export default Player;