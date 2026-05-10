import { useRef, useEffect } from "react";

export default function Bookshelf({ books }) {
  const scrollRef = useRef(null);

  const loopedBooks = [...books, ...books, ...books];

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    console.log("START");

    const timer = setInterval(() => {
      el.scrollLeft += 5;

      console.log("moving", el.scrollLeft);
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        width: "100%",
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
        }}
      >
        {loopedBooks.map((book, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              height: "400px",
              background: "red",
              marginRight: "40px",
              flexShrink: 0,
            }}
          >
            TEST
          </div>
        ))}
      </div>
    </div>
  );
}