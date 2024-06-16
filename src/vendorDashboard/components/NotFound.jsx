import React from 'react'
import {Link} from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
    <div className="errorSection">
    <Link to="/" style={{fontSize:'1.5rem',color:'darkblue'}}>
    <p>Go Back</p>
    </Link>
    
        <h1>404</h1>
        <div>Ⓟⓐⓖⓔ Ⓝⓞⓣ Ⓕⓞⓤⓝⓓ</div>
    </div>
    </>
    
  )
}
