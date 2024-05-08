# Contributing

Thanks for your interest. Contributions are welcome!

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/hometown-prompt-docs/issues) to see if your topic has been discussed before or if it is being worked on. You may also want to check the roadmap (see above). Discussing in an Issue before opening a Pull Request means future contributors only have to search in one place.

## Requirements

- [asdf](https://asdf-vm.com/) and its Node.js plugin
- [pnpm](https://pnpm.io/)

## Dev

### Setup

```shell:no-line-numbers
pnpm install --shamefully-hoist
```

### Serve and watch

```shell:no-line-numbers
pnpm docs:dev
```

### Update Algolia index

```shell:no-line-numbers
cp .env{.example,}
```

and fill in values in `.env`. Then

```shell:no-line-numbers
pnpm algolia:index
```
