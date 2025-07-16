#  SportMarket

A simple React-based e-commerce demo application powered by a fake backend using [`json-server`](https://github.com/typicode/json-server).

This project simulates product listings, user profiles, and interactions using a local mock API.

---

##  Requirements

- **Node.js** (v14 or higher)
- **Yarn** or **npm**
- No need to install `json-server` globally (runs via `npx`)

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/amirenikzad/SportMarket.git
cd SportMarket
```
Install dependencies

Using Yarn:
```bash
yarn
```

 Start the development server
```bash
yarn start
```
This command will run both:

The React frontend on: http://localhost:5173

A fake API server (json-server) on: http://localhost:8080

🔌 Mock API with json-server
This project uses json-server to simulate a backend.

The fake database is stored in:

```bash
src/data/db.json
```
The fake API server runs with:
```bash
 npx json-server --watch src/data/db.json --port 8080
```

