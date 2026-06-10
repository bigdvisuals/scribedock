# Contributing

Thanks for helping improve ScribeDock.

## Local Setup

1. Install Node.js if it is not already installed.
2. Clone the repository.
3. Run tests before changing behavior:

```bash
npm test
```

## Development Notes

- Keep changes small and focused.
- Do not commit secrets, `.env` files, Chrome Web Store ZIP files, or private local notes.
- Keep extension source files in `manifest.json` and `src/`.
- Keep tests in `tests/`.
- Use the existing package script for release ZIPs:

```bash
npm run package
```

## Pull Request Checklist

- Explain what changed and why.
- Run `npm test`.
- If release files changed, run `npm run package`.
- Load the extension locally from `chrome://extensions` and check the main transcript workflow.
