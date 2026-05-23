# Watson Protocol Challenge

This repository contains the `Watson Protocol` Node.js CTF challenge.
It is designed to run locally via Docker Compose and on a public host such as Render.

## Repository structure

- `Dockerfile` - builds the Node.js app on `node:20-alpine`
- `docker-entrypoint.sh` - launches the Node.js challenge service
- `docker-compose.yml` - local development service definition mapping port `5000`
- `app.js` - Express challenge server with prototype pollution exploit logic
- `flag.js` - central flag module that contains the challenge flag
- `README.md` - usage and deployment notes

## Local development

Use Docker Compose for local testing:

```bash
docker compose up --build
```

Then open:

```bash
http://localhost:5000
```

If you need to stop the service:

```bash
docker compose down
```

### Direct Docker build

```bash
docker build -t watson-protocol .
docker run --rm -p 5000:5000 -e NODE_ENV=development watson-protocol
```

## Environment variables

- `NODE_ENV` - `production` enables periodic process restart every 5 minutes

## Deploying on Render

Render can host this service in free-tier mode with the following goals:

- Use `node:20-alpine` for a smaller build footprint
- Keep the flag value centralized in `flag.js`
- Periodically restart the instance in `production` mode to clear runtime contamination

Recommended Render service settings:

- Environment: `Docker`
- Port: `5000`
- Start command: none (entrypoint handles startup)
- Set `NODE_ENV=production`

## Notes

- The challenge logic reads the flag through `flag.js`; no route or frontend file should read or embed it directly.
- `app.js` uses `setInterval` in production to trigger a graceful restart every 5 minutes, which helps keep Render instances clean.

## Git ignore

This repository includes a `.gitignore` to exclude runtime artifacts such as `node_modules/` and local `.env` files.
