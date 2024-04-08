import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";

export default function WritingList({ list }) {
  return (
    <section>
      <Container>
        {list.posts && (
          <section>
            {list.posts.map((post) => {
              return (
                <article>
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
