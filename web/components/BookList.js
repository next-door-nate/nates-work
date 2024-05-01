import styles from "./BookList.module.scss";
import Container from "./Container";
import Image from "next/image";

export default function BookList({ block, books }) {
  return (
    <section data-component="book-list">
      <Container>
        <div className={styles.books}>
          {books &&
            books.map((book, i) => {
              return (
                <div
                  className={styles.book}
                  key={book.id + `book` + i}
                  style={{
                    "--gradient-stop-0": book.gradientColors[0],
                    "--gradient-stop-1": book.gradientColors[1],
                    "--gradient-stop-2": book.gradientColors[2],
                  }}
                >
                  <div className={styles.image}>
                    <div className={styles.cover}>
                      <img src={book.cover} alt={book.title} />
                    </div>
                  </div>
                  <h4>{book.title}</h4>
                  <p>{book.subtitle}</p>
                  <h5>
                    By:&nbsp;
                    {book.authors.map((author, i) => {
                      return (
                        <span key={author.name + i}>
                          {author.name}
                          {i < book.authors.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                    {book.authors.length == 0 && "Various Authors"}
                  </h5>
                  <p>{book.description}</p>
                </div>
              );
            })}
        </div>
      </Container>
    </section>
  );
}
