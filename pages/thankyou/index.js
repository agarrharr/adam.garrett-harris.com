import React from 'react'
import {parse} from 'query-string';

class Gallery extends React.Component {
  render () {
    const form = parse(window.location.search).form;
    const messages = {
      react_native_newsletter: 'Thank you for signing up for the React Native Newsletter!',
      default: 'Thank you!',
    };
    return (
      <div>
        <p>
          {messages[form] || messages.default}
        </p>
      </div>
    )
  }
}

export default Gallery
