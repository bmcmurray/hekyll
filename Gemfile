source 'https://rubygems.org'

require 'json'

gem 'multi_json', '1.7.8'

require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

gem 'compass', '1.0.3'
