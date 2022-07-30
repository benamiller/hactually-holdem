import './Cards.css';

interface card {
    numbers: number[];
}

const Cards = ({numbers}: card) => {
    return (
        <>
        <div className='card-face'>
            <div className='top-left'></div>
            <div className='top-right'></div>
            <div className='bottom-left'></div>
            <div className='bottom-right'></div>
            <div className='number'>{numbers[0]}</div>
        </div>
            <div className='card-face'>
            <div className='top-left'></div>
            <div className='top-right'></div>
            <div className='bottom-left'></div>
            <div className='bottom-right'></div>
            <div className='number'>{numbers[1]}</div>
        </div>
        </>
    )
}

export default Cards;