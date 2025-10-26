# Blueprint Series Backend

Express.js backend API for the Blueprint Series event platform.

## Setup

```bash
cd backend
npm install
npm run dev
```

## API Endpoints

### Get all events
```
GET /api/events
```

### Get specific event
```
GET /api/events/:eventId
```

Available event IDs:
- `1` (Rich Tu event)
- `2` (Sarah Chen event)

### Health check
```
GET /api/health
```

## Running

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server runs on port 5001 by default.
