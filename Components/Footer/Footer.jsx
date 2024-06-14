import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

const Footer = props => {
  return (
    <div className='footer'>
        <p>&copy; 2024 TC Shivambu. All rights reserved. RD Mulaudzi</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

Footer.propTypes = {}

export default Footer