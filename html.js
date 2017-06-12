import React from 'react'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
import { GoogleFont, TypographyStyle } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  componentDidMount() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-31980509-3', 'adamwadeharris.com');
    ga('send', 'pageview');
  },
  render () {
    const { body } = this.props
    const head = Helmet.rewind();

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
