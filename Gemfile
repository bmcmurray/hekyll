source 'https://rubygems.org'

require 'json'
require 'open-uri'

versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'compass', '1.0.3'
gem 'github-pages', versions['github-pages']
gem 'multi_json', '1.7.8'
gem 'jekyll-slim'
gem 'slim', github: 'slim-template/slim'
