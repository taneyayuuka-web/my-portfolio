import { useState } from "react";
import Bookshelf from "./components/Bookshelf";
import "./index.css";

const books = [
  { 
    id: 1, 
    title: "Book 1", 
    cover: "/public/covers/book.png", // 表紙 
    innerCover: "/public/covers/book-inner.png", // 表紙裏 
    content: "心蕾", //内容
    link: "./shinrai.jsx", //リンク先
    spineColor: "#479680"//背表紙カラー
  },
  { 
    id: 2, 
    title: "Book 2", 
    cover: "/public/covers/book1.jpg", 
    innerCover:"/public/covers/book-innner.png",
    content: "...",
    link: "/story/design" ,      
    spineColor: "#c0392b"
  },
  { 
    id: 3, 
    title: "Book 3", 
    cover: "/public/covers/book2.png", 
    innerCover:"/public/covers/book-innner.png",
    content: "ピンセット\n3回生後期「UXデザイン演習課題」",
    link: "/story/gallery",      // ← 本3の遷移先
    spineColor:"#dcbb3b"
  },
  { 
    id: 4, 
    title: "Book 4", 
    cover: "/public/covers/book1.jpg",
    innerCover:"/public/covers/book-innner.png",     
    content: "...",
    link: "/story/works",        // ← 本4の遷移先
    spineColor:"#c0392b"
  },
  { 
    id: 5, 
    title: "Book 5", 
    cover: "/public/covers/book1.jpg", 
    innerCover:"/public/covers/book-innner.png",
    content: "...",
    link: "/story/about",        // ← 本5の遷移先
    spineColor:"#c0392b"
  },
  { 
    id: 6, 
    title: "Book 6", 
    cover: "/public/covers/book1.jpg", 
    innerCover:"/public/covers/book-innner.png",
    content: "...",
    link: "/",      // ← 本6の遷移先
    spineColor:"#000000"
  }
];

export default function App() {
  const [openBookId, setOpenBookId] = useState(null);

  return (
    <>
      <header className="header">
        <h3>Portfolio Taneya Yuuka</h3>
      </header>

      <section class = "content">
        <div className="profile">
          <div class="text">
            <h2>心蕾</h2>
            <p>profile</p>
            <p></p>
          </div>
        </div>
      </section>

      <div className="app">
        <div className="room-wall"></div>

        <Bookshelf
          books={books}
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
