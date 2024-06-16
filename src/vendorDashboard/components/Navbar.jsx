import React from 'react'

const Navbar = ({showLoginHandler,showRegisterHandler,showLogOut,logOutHandler}) => {

  const firmName=localStorage.getItem('firmName')


  console.log(showLoginHandler)
  return (
    <div className="navSection">
        <div className="company">
        𝐕𝐞𝐧𝐝𝐨𝐫 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝

        </div>
        <div className="firmName">
          <h4>
            FirmName:{firmName}
          </h4>
        </div>
        <div className="userAuth">
          {!showLogOut ? <>
          <span onClick={showLoginHandler}>Login/</span>
          <span onClick={showRegisterHandler}>Register</span>
          </> : <span onClick={logOutHandler}>LogOut</span>}
          
            
            

        </div>

    </div>
  )
}

export default Navbar