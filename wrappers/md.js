import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import {rhythm} from 'utils/typography'
import {config} from 'config'
import Bio from 'components/Bio'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  componentDidMount() {
    var disqus_shortname = 'adamwadeharris';
    (function() {
      var dsq = document.createElement('script');
      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  }

  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(2),
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
        <div id="disqus_thread"></div>
          <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
