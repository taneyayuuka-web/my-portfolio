import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Bookshelf({ books, openBookId, onOpen }) {
  const scrollRef = useRef(null);

  const lastScrollLeft = useRef(0);
  const tilt = useRef(0);
  const isAdjusting = useRef(false);
  const userInteracting = useRef(false);

  // 本を3回複製
  const loopedBooks = [...books, ...books, ...books];

  /* ---------------- 初期スクロール ---------------- */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf;
    const init = () => {
      if (el.scrollWidth > el.clientWidth) {
        const third = el.scrollWidth / 3;
        el.scrollLeft = third;
        lastScrollLeft.current = third;
      } else {
        raf = requestAnimationFrame(init);
      }
    };

    init();
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ---------------- 自動スクロール ---------------- */
  useEffect(() => {
    let rafId;

    const loop = () => {
      const el = scrollRef.current;
      if (el && !userInteracting.current && !isAdjusting.current) {
        el.scrollLeft += 1.2;
      }
      rafId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* ---------------- 無限スクロール補正 ---------------- */
 const handleScroll = () => {
  const el = scrollRef.current;
  if (!el || isAdjusting.current) return;

  const third = el.scrollWidth / 3;
  const view = el.clientWidth;

  // tilt
  const delta = el.scrollLeft - lastScrollLeft.current;
  lastScrollLeft.current = el.scrollLeft;
  tilt.current = Math.max(-6, Math.min(6, delta * 0.2));
  el.style.setProperty("--tilt", `${tilt.current}deg`);

  // ===== 無限スクロール補正（完全不可視） =====
  // 左端が視界に入る前
  if (el.scrollLeft < third - view) {
    isAdjusting.current = true;
    requestAnimationFrame(() => {
      el.scrollLeft += third;
      lastScrollLeft.current = el.scrollLeft;
      isAdjusting.current = false;
    });
  }

  // 右端が視界に入る前
  if (el.scrollLeft > third * 2 - view) {
    isAdjusting.current = true;
    requestAnimationFrame(() => {
      el.scrollLeft -= third;
      lastScrollLeft.current = el.scrollLeft;
      isAdjusting.current = false;
    });
  }
};


  /* ---------------- 本クリック ---------------- */
  const handleClick = (book) => {
    if (openBookId !== book.id) {
      onOpen(book.id);
      return;
    }
    window.location.href = book.link;
  };

  return (
    <div className="bookshelf-wrapper">
      <div
        className="bookshelf-3d"
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={() => (userInteracting.current = true)}
        onMouseUp={() => (userInteracting.current = false)}
        onMouseLeave={() => (userInteracting.current = false)}
        onTouchStart={() => (userInteracting.current = true)}
        onTouchEnd={() => (userInteracting.current = false)}
      >
        {loopedBooks.map((book, index) => {
          const key = `${book.id}-${index}`;
          const isActive = openBookId === book.id;

          const element = (
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
                  <img src={book.cover} alt="" />
                </div>
                <div className="book-back" />
              </div>
            </div>
          );

          return isActive
            ? createPortal(element, document.body)
            : element;
        })}
      </div>
    </div>
  );
}
