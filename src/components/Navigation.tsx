import React from 'react'

import HomeIcon from 'icons/HomeIcon'

const Navigation = () => {
  return (
    <div style={{ float: "right", justifyContent: "flex-end" }}>
      <a href="https://adithya.co">
        <HomeIcon className="home-logo" />
      </a>
    </div>
  )
}

export default Navigation
