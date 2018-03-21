import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Adam Garrett-Harris`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: 50,
          }}
        />
        <p>
          Written by <strong>Adam Garrett-Harris</strong> who lives and works in
          Silicon Slopes.{' '}
          <a href="https://twitter.com/agarrharr">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
