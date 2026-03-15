import { useState } from "react";
import Bookshelf from "./components/Bookshelf";
import "./index.css";

const books = [
  { 
    id: 1, 
    title: "心蕾", 
    cover: "/covers/book.png", 
    innerCover: "/covers/book-inner.png", 
    content:
`<h1>心蕾</h1><h3>感情記録とクラフト体験で</h3>
<h3>ストレス解消できるアプリ</h3>
<p>心蕾は入力もしくは選択した感情から様々な花を咲</p>
<p>かせるアプリです。咲いた花は塗り絵、ペーパーク</p>
<p>ラフト、立体メモとして作ったり飾ったりして楽し</p>
<p>み、感情を記録します。</p>`, 
    link: "/shinrai",
    spineColor: "#479680"
  },
  { 
    id: 2, 
    title: "ゲッTONE", 
    cover: "/covers/book2.png", 
    innerCover:"/covers/book-inner2.png",
    content: `<h1>ゲッTONE</h1><h3></h3>
    <p>TONE株式会社秋季インターンシップ</p>`, 
    link: "/gettone", 
    spineColor: "#c0392b"
  },
  { id: 3, title: "玩具業界ポスター", cover: "/covers/book3.png", innerCover:"/covers/book-inner3.png", content: `<h1>玩具業界ポスター</h1>`, link: "/gangu", spineColor:"#386c98" },
  { id: 4, title: "ピンセット", cover: "/covers/book4.png", innerCover:"/covers/book-inner4.png", content: `<h1>ピンセット</h1>`, link: "/pinset", spineColor:"#dcbb3b" },
  { id: 5, title: "印象マップ", cover: "/covers/book5.png", innerCover:"/covers/book-inner5.png", content: `<h1>製品分析</h1>`, link: "/ryukku", spineColor:"#9bb68f" },
  { id: 6, title: "BACKPACK", cover: "/covers/book6.png", innerCover:"/covers/book-inner6.png", content: `<h1>印象マップ</h1>`, link: "/map", spineColor:"#53547b" },
  { id: 7, title: "自主制作", cover: "/covers/book7.png", innerCover:"/covers/book-inner7.png", content: `<h1>自主制作</h1>`, link: "/jisyu", spineColor:"#4c4b4c" }
];

// 補助コンポーネント（export default は付けない）
function BookContent({ text }) {
  return (
    <div className="book-content">
      {text.split("\n").map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

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

 {/* --- タイトル部分 --- */}
<div className="text">
  <p style={{ color: '#888', margin: 0 }}>profile</p>
  <h1 style={{ fontSize: '2rem', margin: '5px 0' }}>自己紹介</h1>
</div>     
  
{/* --- メインコンテンツ --- */}
<section className="content">        
  <div className="photo">
    {/* CSSで .photo { width: 300px; } などに設定しておくと安定します */}
    <img src="/covers/icon.jpg" alt="my icon" style={{ width: '100%', borderRadius: '10px' }} />
  </div>
  
  <div className="contents">
    <p style={{ color: '#666', marginBottom: '4px' }}>taneya yuuka</p>
    <h1>種谷 有香</h1>
    
    <div style={{ marginBottom: '20px', borderLeft: '3px solid #ccc', paddingLeft: '15px' }}>
      <h3>和歌山大学システム工学部システム工学科</h3>
      <h3>クロスリアリティ・情報デザインメジャー</h3>
      <h3>デザインシステム計画研究室</h3>
    </div>

    <p><strong>● 部活動</strong>　文化系デジタル創作活動「mycom」部長</p>
    <p><strong>● アルバイト</strong>　塾講師</p>
    <p><strong>● 資格</strong>　色彩検定2級・3級、基本情報技術者試験（合格見込み）</p>
    <p><strong>● 趣味</strong>　ニードルフェルト、料理（練習中！）</p>
    <p><strong>● 特技</strong>　似顔絵を描くこと</p>
  </div>
</section>


      <section className="graph">
        <h1>システムによる効率的かつ的確なデザイン開発を</h1>
        <h1>目指して</h1>
        <div className="photo2">
          <img src="/covers/profile2.png" alt="my icon" className="photoimg" />
        </div>
        <p>illustratorによる基本のデザイン、方法論による分析、柔軟な発想を行うことができます。柔軟な発想はプログラミングを学習したことで身についたものであり、試行錯誤をくり返しつつ複数ある正解の形に近づいていく思考をデザインに活かしています。分析による、感覚的ではない根拠のある論理的なデザインが得意です。</p>
      </section>

      <footer className="footer">
        <p>© 2026 Taneya Yuuka</p>
      </footer>
    </>
  );
}