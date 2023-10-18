# Listening Patterns

Nextjs website using spotify api to give the user an overlook of their listening patterns.

## Development

Start docker container

```bash
docker run -v "$(pwd):/app" --network=listeningpatterns_default -it -p 3000:3000 node:20.8-alpine sh
```

Run the development server:

```bash
npm run dev
```
