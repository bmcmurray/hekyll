# Hekyll
_pronunciation: "heckle"_

Authored by: Brian McMurray (bmcmurray) and Steven Merrill (smerrill)

Hekyll is a presentation generator that uses [Jekyll](https://github.com/mojombo/jekyll) and [Impress.js](https://github.com/bartaz/impress.js) to create awesome presentations. You write [Markdown](http://daringfireball.net/projects/markdown/syntax) files, which get turned into individual slides for an Impress.js presentation.

## Design Goals

Hekyll should:

- Make it easy for hackers to write graphically-impressive presentations in Markdown.
- Allow easier collaboration on these presentations through GitHub.
- Allow users to commit and publish their presentations through GitHub using GitHub Pages.
- Provide a good print stylesheet so that a user can print to PDF when conferences ask for slide decks.
- Provide a simple slideshow mode for generating quick, regular slide shows (simple cross-fades between slides without the need to individually position each slide "Prezi-style."

## How to Use Hekyll

1. Download and install Jekyll.
2. Download or clone the Hekyll repository.
3. Configure options in _config.yml
4. Create a new Markdown file for each slide in ``_posts``. Use the ``post_template.md`` as a starting point. Be sure to name each file with a date, just like Jekyll.

## Requirements

- Jekyll

## Acknowledgements

This project stands on the shoulders of giants and would not be possible without these projects:

- [impress.js](https://github.com/bartaz/impress.js)
- [Jekyll](https://github.com/mojombo/jekyll)
- [GitHub Pages](http://pages.github.com/)

