# Filters taken from the Octopress project by Brandon Mathis.
# https://github.com/imathis/octopress/blob/master/plugins/octopress_filters.rb
# https://github.com/recurser/jekyll-plugins
# This plugin works with the generate_categories.rb plugin
# It requires the file category_feed.xml in the root
module Jekyll

  module Filters

    # Escapes CDATA sections in post content
    def cdata_escape(input)
      input.gsub(/<!\[CDATA\[/, '&lt;![CDATA[').gsub(/\]\]>/, ']]&gt;')
    end

    # Replaces relative urls with full urls
    def expand_urls(input, url='')
      url ||= '/'
      input.gsub /(\s+(href|src)\s*=\s*["|']{1})(\/[^\"'>]*)/ do
        $1+url+$3
      end
    end

  end

end
