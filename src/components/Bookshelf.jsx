import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Bookshelf({ books, openBookId, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const scrollRef = useRef(null);
  const hasMoved = useRef(false);
  const pendingAdjust = useRef(false);

  const lastScrollLeft = useRef(0);
  const tilt = useRef(0);

  const userInteracting = useRef(false);

  const isAdjusting = useRef(false);

  // ★ 本を3回複製して無限スクロールに見せる
  const loopedBooks = [...books, ...books, ...books];

  // ★ 初回レンダリング時に baseTransform を保存
  useEffect(() => {
    const elements = document.querySelectorAll(".book-3d");
    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      el.dataset.baseTransform =
        style.transform === "none" ? "" : style.transform;
    });
  }, [loopedBooks]);

  //初期スクロール用
useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  let raf;
  const initScroll = () => {
    if (el.scrollWidth > el.clientWidth) {
      const third = el.scrollWidth / 3;
      el.scrollLeft = third;
      lastScrollLeft.current = third;
    } else {
      raf = requestAnimationFrame(initScroll);
    }
  };

  initScroll();
  return () => cancelAnimationFrame(raf);
}, []);


useEffect(() => {
  let rafId;

  const loop = () => {
    const el = scrollRef.current;
    if (el && !userInteracting.current && !pendingAdjust.current) {
      el.scrollLeft += 1.5;
    }
    rafId = requestAnimationFrame(loop);
  };

  loop();
  return () => cancelAnimationFrame(rafId);
}, []);


// 無限スクロール補正
const handleScroll = () => {
  const el = scrollRef.current;
  if (!el || isAdjusting.current) return;

  const third = el.scrollWidth / 3;
  const center = third; // 常に中央ブロック

  // tilt
  const delta = el.scrollLeft - lastScrollLeft.current;
  lastScrollLeft.current = el.scrollLeft;

  tilt.current = Math.max(-6, Math.min(6, delta * 0.2));
  el.style.setProperty("--tilt", `${tilt.current}deg`);

  // ===== 無限補正（完全安定版） =====
  if (el.scrollLeft < center - third * 0.25) {
    isAdjusting.current = true;
    requestAnimationFrame(() => {
      el.scrollLeft = center;
      lastScrollLeft.current = center;
      isAdjusting.current = false;
    });
  }

  if (el.scrollLeft > center + third * 0.25) {
    isAdjusting.current = true;
    requestAnimationFrame(() => {
      el.scrollLeft = center;
      lastScrollLeft.current = center;
      isAdjusting.current = false;
    });
  }
};



  // ★ 本を開くアニメーション → 遷移
  const handleClick = (book) => {
    if (openBookId !== book.id) {
      onOpen(book.id);
      return;
    }
    window.location.href = book.link;
  };



  return (
    <div className="bookshelf-wrapper">

      {/* 本棚 */}
      <div
        className="bookshelf-3d"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {loopedBooks.map((book, index) => {
          const realKey = `${book.id}-${index}`;
          const isActive = openBookId === book.id;

          const element = (
            <div
              key={realKey}
              className={`book-3d 
                ${isActive ? "active" : ""} 
                ${isOpening && isActive ? "opening" : ""} 
                ${isLeaving && isActive ? "fade-out" : ""}`}
              data-base-transform=""
              onClick={() => handleClick(book)}
            >
              <div className="book-inner">
                <div
                  className="book-spine"
                  style={{ backgroundColor: book.spineColor }}
                ></div>

                <div className="book-cover">
                  <div className="book-cover-inner">
                    <img src={book.innerCover} />
                  </div>
                  <img src={book.cover} />
                </div>

                <div className="book-pages">{book.content}</div>
                <div className="book-back"></div>
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
