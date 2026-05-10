import { useState, useEffect, useRef } from "react";
import Bookshelf from "./components/Bookshelf";
import "./index.css";

const books = [
  {
    id: 1,
    title: "心蕾",
    cover: "/covers/book.png",
    innerCover: "/covers/book-inner.png",
    content: "content",
    spineColor: "#479680"
  },
  {
    id: 2,
    title: "ゲッTONE",
    cover: "/covers/book2.png",
    innerCover: "/covers/book-inner2.png",
    content: "content",
    spineColor: "#c0392b"
  },
  {
    id: 3,
    title: "玩具業界ポスター",
    cover: "/covers/book3.png",
    innerCover: "/covers/book-inner3.png",
    content: "content",
    spineColor: "#386c98"
  },
  {
    id: 4,
    title: "ピンセット",
    cover: "/covers/book4.png",
    innerCover: "/covers/book-inner4.png",
    content: "content",
    spineColor: "#dcbb3b"
  },
  {
    id: 5,
    title: "印象マップ",
    cover: "/covers/book5.png",
    innerCover: "/covers/book-inner5.png",
    content: "content",
    spineColor: "#9bb68f"
  },
  {
    id: 6,
    title: "BACKPACK",
    cover: "/covers/book6.png",
    innerCover: "/covers/book-inner6.png",
    content: "content",
    spineColor: "#53547b"
  }
];

export default function App() {
  const [openBookId, setOpenBookId] = useState(null);

  // 本棚DOM取得
  const shelfRef = useRef(null);

  // 自動スクロール
  useEffect(() => {
    const shelf = shelfRef.current;

    if (!shelf) return;

    let animationFrame;
    let scrollAmount = 0;
    let isPaused = false;

    const speed = 0.4;

    const animate = () => {
      if (!isPaused) {
        scrollAmount += speed;

        // 横スクロール
        shelf.scrollLeft = scrollAmount;

        // 最後まで行ったらループ
        if (
          scrollAmount >=
          shelf.scrollWidth - shelf.clientWidth
        ) {
          scrollAmount = 0;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // ホバー中停止
    const stopScroll = () => {
      isPaused = true;
    };

    const startScroll = () => {
      isPaused = false;
    };

    shelf.addEventListener("mouseenter", stopScroll);
    shelf.addEventListener("mouseleave", startScroll);

    return () => {
      cancelAnimationFrame(animationFrame);

      shelf.removeEventListener("mouseenter", stopScroll);
      shelf.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <h3>Portfolio Taneya Yuuka</h3>
      </header>

      <div className="app">
        <div className="room-wall"></div>

        <Bookshelf
          ref={shelfRef}
          books={[...books, ...books]} // ← 無限ループ感
          openBookId={openBookId}
          onOpen={(id) => setOpenBookId(id)}
        />
      </div>

      <footer className="footer">
        <p>© 2026 Taneya Yuuka</p>
      </footer>
    </>
  );
}