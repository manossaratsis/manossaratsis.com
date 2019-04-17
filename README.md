# manossaratsis.com

Personal website built using [Nanoc](https://nanoc.ws)

## Developing

To start the web server that serves static files, navigate to the root directory of the repository
and run:

```bash
$ nanoc view
```

To compile the website once, open up a new Terminal tab and run:

```bash
$ nanoc
```

To compile the website automatically when a change is detected, open up a new Terminal tab and run:

```bash
$ guard start
```

## Deploying

The production website lives on the `gh-pages` branch under the `/output` directory. To see how that
is configured, check out the [relevant Nanoc instructions](https://nanoc.ws/doc/deploying/#with-git).

To compile the latest version of the website, push to the `gh-pages` branch and deploy, navigate to
the root directory of the repository and run:

```bash
$ nanoc && nanoc deploy
```
