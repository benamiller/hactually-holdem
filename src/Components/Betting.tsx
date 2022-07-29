import './Betting.css';

interface BettingProps {
    prevBet: boolean;
    isTurn: boolean;
    handleClick: () => void;
}

const Betting = ({prevBet, isTurn, handleClick}: BettingProps) => {
    return (
        <section className={`betting-container ${isTurn ? "active-player" : "non-active-player"}`}>
            <button onClick={handleClick}>{prevBet ? 'Call' : 'Check'}</button>
            <button onClick={handleClick}>Raise</button>
            <button onClick={handleClick}>Fold</button>
        </section>
    )
}

export default Betting;