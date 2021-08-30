import React, {useEffect} from 'react'

// state
import { converterStore } from '../store'

const Chart = () => {

    const getCurrentRate = converterStore((state)=> state.getCurrentRate);
    const loading = converterStore((state) => state.loading);
    const currency = converterStore((state) => state.currency);
    
    useEffect(() => {
       getCurrentRate("USD")
    }, [])

    console.log(currency);

    return (
        <div className="chart">
            {loading ? "true" : "falls"}
        </div>
    )
}

export default Chart
