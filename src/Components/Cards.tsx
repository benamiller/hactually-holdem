import './Cards.css';

interface card {
    cards: {suit: string, value: number}[];
}

const Cards = ({cards}: card) => {
    return (
        <>
        <div className='card-face'>
            <div className={`top-left ${cards[0].suit}`}></div>
            <div className={`top-right ${cards[0].suit}`}></div>
            <div className={`bottom-left ${cards[0].suit}`}></div>
            <div className={`bottom-right ${cards[0].suit}`}></div>
            <div className='number'>{cards[0].value}</div>
        </div>
            <div className='card-face'>
            <div className={`top-left ${cards[1].suit}`}></div>
            <div className={`top-right ${cards[1].suit}`}></div>
            <div className={`bottom-left ${cards[1].suit}`}></div>
            <div className={`bottom-right ${cards[1].suit}`}></div>
            <div className='number'>{cards[1].value}</div>
        </div>
        </>
    )
}

export default Cards;
