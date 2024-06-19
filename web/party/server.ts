import type * as Party from 'partykit/server';

export default class Server implements Party.Server {
  readonly options = {
    hibernate: false,
  };

  counter = 0;

  constructor(readonly room: Party.Room) {}

  async onStart() {
    console.log('started');
    this.room.broadcast(`${this.counter}`);
  }

  async onMessage(message: string, sender: Party.Connection) {
    if (message === 'increment') {
      this.counter++;
      this.room.broadcast(`${this.counter}`);
    }

    if (message === 'decrement') {
      this.counter--;
      this.room.broadcast(`${this.counter}`);
    }

    // send the message to all connected clients
    // for (const conn of this.room.getConnections()) {
    //   if (conn.id !== sender.id) {
    //     conn.send(`${sender.id} says: ${message}`);
    //   }
    // }
  }

  async onConnect(connection: Party.Connection<unknown>, ctx: Party.ConnectionContext): Promise<void> {
    console.log('hello');
    this.room.broadcast(`${this.counter}`);
  }

  async onRequest(req: Party.Request) {
    return new Response(`${this.counter}`);
  }
}
