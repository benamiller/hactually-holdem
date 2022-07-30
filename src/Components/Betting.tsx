import './Betting.css';

interface BettingProps {
    prevBet: boolean;
    isTurn: boolean;
    handleCheck: () => void;
    handleRaise: () => void;
    handleBet: () => void;
}

const Betting = ({prevBet, isTurn, handleCheck, handleRaise, handleBet}: BettingProps) => {
    return (
        <section className={`betting-container ${isTurn ? "active-player" : "non-active-player"}`}>
            <button onClick={handleCheck}>{prevBet ? 'Call' : 'Check'}</button>
            <button onClick={handleRaise}>Raise</button>
            <button onClick={handleBet}>Fold</button>
        </section>
    )
}

export default Betting;