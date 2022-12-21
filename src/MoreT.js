import React from 'react'
import Notificationsicon from '@material-ui/icons/Notifications'
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'

import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import GetAppIcon from '@material-ui/icons/GetApp'

const MoreT = () => {
  return (
    <div className='moret'>
      <div className='moret__in'>
        <Notificationsicon />
        <p>Notification preferences</p>
      </div>
      <hr />
      <div className='moret__in'>
        <LiveHelpIcon />
        <p>24*7 Customer Care</p>
      </div>
      <hr />
      <div className='moret__in'>
        <TrendingUpIcon />
        <p>Advertise</p>
      </div>
      <hr />
      <div className='moret__in'>
        <GetAppIcon />
        <p>Download App</p>
      </div>
    </div>
  )
}

export default MoreT
