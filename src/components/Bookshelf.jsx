import { useRef, useEffect } from "react";

export default function Bookshelf({ books }) {
  const scrollRef = useRef(null);

  const loopedBooks = [...books, ...books, ...books];

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    const third = el.scrollWidth / 3;

    el.scrollLeft = third;

    const loop = () => {
      el.scrollLeft += 1;

      if (el.scrollLeft >= third * 2) {
        el.scrollLeft = third;
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  return (
    <div className="bookshelf-scroll" ref={scrollRef}>
      <div className="bookshelf-row">
        {loopedBooks.map((book, index) => (
          <div key={index} className="book-3d">
            <div className="book-inner">

              <div
                className="book-spine"
                style={{ backgroundColor: book.spineColor }}
              />

              <div className="book-cover">
                <img src={book.cover} alt="" />
              </div>

              <div
                className="book-pages"
                dangerouslySetInnerHTML={{ __html: book.content }}
              />

              <div className="book-back" />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}