import { useState } from "react";
import Bookshelf from "./components/Bookshelf";
import "./index.css";

const books = [
  { 
    id: 1, 
    title: "Book 1", 
    cover: "/public/covers/book.png", // 表紙 
    innerCover: "/public/covers/book-inner.png", // 表紙裏 
    content: "心蕾/n", //内容
    link: "/shinrai",
    spineColor: "#479680"//背表紙カラー
  },
  { 
    id: 2, 
    title: "Book 2", 
    cover: "/public/covers/gettone.png", 
    innerCover:"/public/covers/book-innner.png",
    content: "ゲッTONE",
    link: "/gettone" ,      
    spineColor: "#c0392b"
  },
  { 
    id: 3, 
    title: "Book 3", 
    cover: "/public/covers/book3.png", 
    innerCover:"/public/covers/book-innner.png",
    content: "玩具業界についてのポスター",
    link: "/pinset",      // ← 本3の遷移先
    spineColor:"#386c98"
  },
  { 
    id: 4, 
    title: "Book 4", 
    cover: "/public/covers/book2.png",
    innerCover:"/public/covers/book-innner.png",     
    content: "ピンセット\n3回生後期「UXデザイン演習課題」",
    link: "/pinset",        // ← 本4の遷移先
    spineColor:"#dcbb3b"
  },
  { 
    id: 5, 
    title: "Book 5", 
    cover: "/public/covers/background.png", 
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
    content: "自己紹介",
    link: "/",      // ← 本6の遷移先
    spineColor:"#black"
  }
];

export default function App() {
  const [openBookId, setOpenBookId] = useState(null);

  return (
    <>
      <header className="header">
        <h3>Portfolio Taneya Yuuka</h3>
      </header>

      <div className="app">
        <div className="room-wall"></div>

        <Bookshelf
          books={books}
          openBookId={openBookId}
          onOpen={(id) => setOpenBookId(id)}
        />
      </div>

      <div class="text">
        <h1>自己紹介</h1>
        <p>profile</p>
      </div>    
        
      <section class = "content">        
        <div class = "photo">
          <img
              src = "/public/covers/book1.jpg"
              alt = "my icon"
              className="photo"
          />
        </div>
        <div className= "contents">
          <p>taneya yuuka</p>
          <h1>種谷 有香</h1>
          <p>和歌山大学システム工学部システム工学科</p>
            <p>クロスリアリティ・情報デザインメジャー</p>
          <p>デザインシステム計画研究室</p>
        </div>
      </section>
      <section className = "graph">
        <h2>システムによる効率的かつ的確なデザイン開発を目指して</h2>
        <p>illustratorによる基本のデザイン、方法論による分析、柔軟な発想を行うことができます。柔軟な発想はプログラミングを学習したことで身についたものであり、試行錯誤をくり返しつつ複数ある正解の形に近づいていく思考をデザインに活かしています。分析による、感覚的ではない根拠のある論理的なデザインが得意です</p>
          <div className = "photo2">
          <img
              src = "/public/covers/book1.jpg"
              alt = "my icon"
              className="photo"
          />
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Taneya Yuuka</p>
      </footer>
    </>
  );
}
