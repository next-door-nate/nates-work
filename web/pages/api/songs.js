export const config = { runtime: "experimental-edge" };

export default async function handler(req, res) {
  if (req.method === "GET") {
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
      res.status(200).json(songs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    // Process a GET request
    res.status(200).json({ message: JSON.stringify(data) });
  } else {
    return null;
  }
}
