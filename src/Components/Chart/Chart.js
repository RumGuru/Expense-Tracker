import React from 'react';

import './Chart.css';

import ChartBar from './ChartBar';


const Chart = (props) =>{
    const dataPointValues = props.dataPoints.map((point) => point.value);
    let totalMaximum = 0;
    for (const point of dataPointValues){
        totalMaximum += point;
    }
    
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => {
              return  <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>
            })}
        </div>
    );
}

export default Chart;