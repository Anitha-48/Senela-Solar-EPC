## Development

Install dependencies and create a local `.env` from `.env.example`. Configure the SMTP credentials for the mailbox/provider that will send website enquiries.

```bash
npm install
npm run dev:full
```

The Vite app runs on `http://localhost:5173` and proxies `/api/contact` to the Node.js server on port `3001`. Successful submissions are sent to `CONTACT_TO`, which defaults to `info@senelainternational.com`.

For production, run `npm run build` for the frontend and `npm run server` for the API. Set the environment variables on the hosting provider; never commit `.env` or SMTP passwords.

