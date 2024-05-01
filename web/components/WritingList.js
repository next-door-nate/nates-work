import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";

export default function WritingList({ list, books }) {
  return (
    <section>
      {books.map((book, i) => {
        return <h2>{book.title}</h2>;
      })}
      <Container>
        {list.posts && (
          <section>
            {list.posts.map((post) => {
              return (
                <article key={post._id}>
                  <h3>{post.title}</h3>
                  <RichTextRenderer blocks={post.description} />
                  <h5>{post.date}</h5>
                </article>
              );
            })}
          </section>
        )}
      </Container>
    </section>
  );
}
