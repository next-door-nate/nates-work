import { Reactions } from "../components/Reactions";

const ROOM_ID = "next";

export default async function Party() {
  // fetch initial data in server component for server rendering
  const roomHost = "192.168.0.195:1999";
  const roomId = ROOM_ID;
  const req = await fetch(`http://${roomHost}/party/${roomId}`, {
    method: "GET",
    next: { revalidate: 0 },
  });

  // onRequest handler will respond with initial data
  const res = (await req.json()) as { reactions: Record<string, number> };

  // pass initial data to client, which will connect to the room via WebSockets
  return (
    <main className="p-2">
      <h1 className="text-3xl font-medium">Welcome to Next.js!</h1>
      <Reactions
        roomHost={roomHost}
        roomId={roomId}
        initialData={res.reactions}
      ></Reactions>
    </main>
  );
}