import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Bookshelf({ books, openBookId, onOpen }) {
  const scrollRef = useRef(null);
  const lastScrollLeft = useRef(0);
  const tilt = useRef(0);

  // 本を3回複製
  const loopedBooks = [...books, ...books, ...books];

  /* ---------------- 初期スクロール ---------------- */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const init = () => {
      if (el.scrollWidth > el.clientWidth) {
        const third = el.scrollWidth / 3;
        el.scrollLeft = third;
        lastScrollLeft.current = third;
      } else {
        requestAnimationFrame(init);
      }
    };
    init();
  }, []);

  /* ---------------- 無限スクロール補正（ジャンプなし） ---------------- */
 useEffect(() => {
  let rafId;
  const SPEED = 0.35; // ← 自動スクロール速度（調整可）

  const loop = () => {
    const el = scrollRef.current;
    if (!el) return;

    // ① 自動スクロール
    el.scrollLeft += SPEED;

    const third = el.scrollWidth / 3;
    const view = el.clientWidth;

    // ② 無限ループ補正（ジャンプなし）
    if (el.scrollLeft < third - view) {
      el.scrollLeft += third;
    } else if (el.scrollLeft > third * 2 - view) {
      el.scrollLeft -= third;
    }

    lastScrollLeft.current = el.scrollLeft;
    rafId = requestAnimationFrame(loop);
  };

  loop();
  return () => cancelAnimationFrame(rafId);
}, []);


  /* ---------------- スクロール傾き ---------------- */
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const delta = el.scrollLeft - lastScrollLeft.current;
    lastScrollLeft.current = el.scrollLeft;

    tilt.current = Math.max(-6, Math.min(6, delta * 0.2));
    el.style.setProperty("--tilt", `${tilt.current}deg`);
  };

  /* ---------------- 本クリック ---------------- */
  const handleClick = (book) => {
    if (openBookId !== book.id) {
      onOpen(book.id);
    } else {
      window.location.href = book.link;
    }
  };

  return (
    <div className="bookshelf-wrapper">
      <div
        className="bookshelf-3d"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {loopedBooks.map((book, index) => {
          const key = `${book.id}-${index}`;
          const isActive = openBookId === book.id;

          const bookElement = (
            <div
              key={key}
              className={`book-3d ${isActive ? "active" : ""}`}
              onClick={() => handleClick(book)}
            >
              <div className="book-inner">
                <div
                  className="book-spine"
                  style={{ backgroundColor: book.spineColor }}
                />

                <div className="book-cover">
                  <div className="book-cover-inner">
                    <img src={book.innerCover} alt="" />
                  </div>
                  <img src={book.cover} alt="" />
                </div>

                <div className="book-pages" dangerouslySetInnerHTML={{ __html: book.content }} ></div>

                <div className="book-back" />
              </div>
            </div>
          );

          return isActive
            ? createPortal(bookElement, document.body)
            : bookElement;
        })}
      </div>
    </div>
  );
}
