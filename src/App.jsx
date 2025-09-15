import { useState } from 'react';

const Square = () => {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }

    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
};

const Board = () => {
    return (
        <div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
};

export default Board;
