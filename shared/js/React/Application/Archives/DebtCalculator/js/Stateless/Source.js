import React from 'react'
const MeasureSource=(data)=>{
    return(
    <p className="MeasureCopy">Source : <a href={data.URL} rel="noopener noreferrer" target="_blank">{data.Copy}</a> </p>
    )
}
export default MeasureSource;