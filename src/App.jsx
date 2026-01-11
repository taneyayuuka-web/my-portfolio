import { useState } from "react";
import Bookshelf from "./components/Bookshelf";
import "./index.css";

const books = [
  { 
    id: 1, 
    title: "Book 1", 
    cover: "/covers/book.png", // 表紙 
    innerCover: "/covers/book-inner.png", // 表紙裏 
    content: ` <h1>心蕾</h1> 
    <p>心蕾は入力もしくは選択した感情から様々な花を</p>
    <p>咲かせるアプリです。咲いた花は塗り絵、ペーパー</p>
    <p>クラフト、立体メモとして作ったり飾ったりして</p>
    <p>楽しみ、感情を記録します。</p> 
    <p>自由に改行できます。</p> `, 
    link: "/",
    spineColor: "#479680"//背表紙カラー
  },
  { 
    id: 2, 
    title: "Book 2", 
    cover: "/covers/gettone.png", 
    innerCover:"/covers/book-innner.png",
    content: ` <h1>ゲッTONE</h1> 
    <p>これはサンプルの本文です。</p> 
    <p>自由に改行できます。</p> `, 
    link: "/" ,      
    spineColor: "#c0392b"
  },
  { 
    id: 3, 
    title: "Book 3", 
    cover: "/covers/book3.png", 
    innerCover:"/covers/book-innner.png",
        content: ` <h1>玩具業界ポスター</h1> 
    <p>これはサンプルの本文です。</p> 
    <p>自由に改行できます。</p> `, 
    link: "/",      // ← 本3の遷移先
    spineColor:"#386c98"
  },
  { 
    id: 4, 
    title: "Book 4", 
    cover: "/covers/book2.png",
    innerCover:"/covers/book-innner.png",     
        content: ` <h1>ピンセット</h1> 
    <p>これはサンプルの本文です。</p> 
    <p>自由に改行できます。</p> `, 
    link: "/",        // ← 本4の遷移先
    spineColor:"#dcbb3b"
  },
  { 
    id: 5, 
    title: "Book 5", 
    cover: "/covers/background.png", 
    innerCover:"/covers/book-innner.png",
        content: ` <h1>リュック</h1> 
    <p>これはサンプルの本文です。</p> 
    <p>自由に改行できます。</p> `, 
    link: "/",        // ← 本5の遷移先
    spineColor:"#c0392b"
  },
  { 
    id: 6, 
    title: "Book 6", 
    cover: "/covers/book6.png", 
    innerCover:"/covers/book-innner.png",
        content: ` <h1>印象マップ</h1> 
    <p>これはサンプルの本文です。</p> 
    <p>自由に改行できます。</p> `, 
    link: "/",      // ← 本6の遷移先
    spineColor:"#9bb68f"
  },
  { 
    id: 7, 
    title: "Book 7", 
    cover: "/covers/book7.png", 
    innerCover:"/covers/book-innner.png",
        content: ` <h1>自主制作</h1> 
    <p>これはサンプルの本文です。</p> 
    <p>自由に改行できます。</p> `, 
    link: "/",      // ← 本6の遷移先
    spineColor:"#4c4b4c"
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
              src = "/covers/book1.jpg"
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
              src = "/covers/book1.jpg"
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
