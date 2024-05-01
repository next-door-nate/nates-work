export async function GET() {
  // Function to fetch the authentication token
  async function fetchToken() {
    const loginQuery = {
      query: `
        mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token
          }
        }
      `,
      variables: {
        email: process.env.LITERAL_EMAIL,
        password: process.env.LITERAL_PASSWORD,
      },
    };

    const response = await fetch("https://literal.club/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginQuery),
    });

    const data = await response.json();
    if (response.ok && data.data && data.data.login) {
      return data.data.login.token;
    } else {
      throw new Error(data.errors ? data.errors[0].message : "Failed to fetch token");
    }
  }

  // Function to fetch books using the token
  async function fetchBooks(token) {
    const booksQuery = {
      query: `
        query myBooks {
          myBooks {
            ...BookParts
          }

          shelf(where: { slug: "books-i-own" }) {
            ...ShelfFull   # find fragments below
          }
        }

        fragment BookParts on Book {
          id
          slug
          title
          subtitle
          description
          isbn10
          isbn13
          language
          pageCount
          publishedDate
          publisher
          cover
          authors {
            id
            name
          }
          gradientColors
        }

        fragment ShelfFull on Shelf {
          ...ShelfParts
          owner {
            ...ProfileParts
          }
          books {
            ...BookParts
          }
        }
        
        fragment ShelfParts on Shelf {
          id
          slug
          title
          description
          profileId
        }
        
        fragment ProfileParts on Profile {
          id
          handle
          name
          bio
          image
          invitedByProfileId
        }
        
      `,
    };

    const response = await fetch("https://literal.club/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(booksQuery),
    });

    const data = await response.json();
    if (response.ok && data.data) {
      return data.data.myBooks;
    } else {
      throw new Error(data.errors ? data.errors[0].message : "Failed to fetch books");
    }
  }

  try {
    const token = await fetchToken();
    const books = await fetchBooks(token);
    return Response.json(books);
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ message: error.message });
  }
}
