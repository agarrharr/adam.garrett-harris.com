import React from 'react'
import {config} from 'config'
import {rhythm} from 'utils/typography'
import profilePic from './profile-pic.png'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        Written by <strong>{config.authorName}</strong> who lives and works in Silicon Slopes. <a href="https://twitter.com/adamCoder">You should follow him on Twitter</a>
      </p>
    )
  }
}

export default Bio
