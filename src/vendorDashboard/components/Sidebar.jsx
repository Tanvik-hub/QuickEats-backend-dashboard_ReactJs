import React from 'react'

const Sidebar = ({showFirmHandler,showProductHandler,showAllProductsHandler,showFirmTile}) => {
  return (
    <div className="sideBarSection">
        <ul>
          {showFirmTile? <li onClick={showFirmHandler}>𝘼𝙙𝙙 𝙁𝙞𝙧𝙢</li>  :""}
            
            <li onClick={showProductHandler}>𝘼𝙙𝙙 𝙋𝙧𝙤𝙙𝙪𝙘𝙩</li>
            <li onClick={showAllProductsHandler}>𝘼𝙡𝙡 𝙋𝙧𝙤𝙙𝙪𝙘𝙩𝙨</li>
            <li>𝙐𝙨𝙚𝙧 𝘿𝙚𝙩𝙖𝙞𝙡𝙨</li>
        </ul>
    </div>
  )
}

export default Sidebar