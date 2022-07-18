import './Betting.css';

interface BettingProps {
    prevBet: boolean;
}

const Betting = ({prevBet}: BettingProps) => {
    return (
        <section className='betting-container'>
            <button>{prevBet ? 'Call' : 'Check'}</button>
            <button>Raise</button>
            <button>Fold</button>
        </section>
    )
}

export default Betting;