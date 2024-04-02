export async function GET() {
  try {
    // Replace 'https://api.example.com/data' with your external API URL
    const response = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Natewich&api_key=1a13504fc96715f514c38a8893b56b70&limit=10&format=json"
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();

    let songs = data.recenttracks;

    // Sending the response back to the client
    return Response.json(songs);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
