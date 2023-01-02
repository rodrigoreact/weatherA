import React, {useEffect, useState} from 'react';

function Fecha() {
    const [hour, setHour] = useState();
    const [minuts, setMinuts] = useState();

    useEffect(() =>{
        setInterval(() => {
            const date = new Date();
            setMinuts(date.getMinutes());
            setHour(date.getHours())
        }, 2000)

    }, []);
    return (
        <div className='clock'>
            {hour < 10 ? "0"+hour : hour} <br /><hr />
            {minuts < 10 ? "0"+minuts : minuts}
        </div>
    );
};

export default Fecha;