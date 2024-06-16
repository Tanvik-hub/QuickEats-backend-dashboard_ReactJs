import React from 'react'

const Welcome = () => {
  const firmName = localStorage.getItem("firmName")
  return (
    <div className='welcomeSection'>
        <h2>𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖳𝗈 𝖰𝗎𝗂𝖼𝗄𝖤𝖺𝗍𝗌😋</h2>
        <div className="landingImage">
          <img src='/assets/chef.jpg' alt='welcome' />
        </div>
    </div>
  )
}

export default Welcome