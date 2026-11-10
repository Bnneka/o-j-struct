# O J STRUCT

Next.js App Router, TypeScript and Tailwind CSS. Run `npm ci` and `npm run dev`, then open http://localhost:3000. For production, run `npm run build` followed by `npm start` on a Next.js server.

Copy `.env.example` to `.env.local`. Set the canonical site URL, business location, public email and phone. Set the account URL only after confirming its destination. Rebuild after changing company details.

Set the enquiry recipient, endpoint and bearer token before launch. The server action sends a JSON POST with name, email, phone, project, location, brief and to. Configure the endpoint to validate the token and return HTTP 2xx with `{"delivered":true}` once delivery is confirmed. The contact page shows an unavailable message until delivery is configured.

Edit services and catalogue entries in `lib/content.ts`. The supplied images are generated concepts. Replace them with approved project photography and add verified floor areas, room counts, additional gallery views, team details and credentials when available. The catalogue accepts plan enquiries pending confirmed prices and checkout requirements.
