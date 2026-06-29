# Contributing

Thanks for helping improve ScribeDock.

## Local Setup

1. Install Node.js.
2. Clone the repository.
3. Load the extension locally from `chrome://extensions`.
4. Run the automated tests:

```bash
npm test
```

## Development Guidelines

- Keep changes small and focused.
- Do not commit secrets, `.env` files, packaged ZIP files, local tool output, or private notes.
- Keep extension source files in `manifest.json` and `src/`.
- Keep automated tests in `tests/`.
- Use `npm run package` for Chrome Web Store release ZIPs.

## Pull Request Checklist

- Explain what changed and why.
- Run `npm test`.
- Run `npm run package` if release files or packaging behavior changed.
- Manually load the extension in Chrome and verify the main transcript workflow.
