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
    <h3>3回生前期授業「アプリデザイン総合演習」</h3>
    <p>心蕾は入力もしくは選択した感情から様々な花を</p>
    <p>咲かせるアプリです。咲いた花は塗り絵、ペーパー</p>
    <p>クラフト、立体メモとして作ったり飾ったりして</p>
    <p>楽しみ、感情を記録します。</p> `, 
    link: "/",
    spineColor: "#479680"//背表紙カラー
  },
  { 
    id: 2, 
    title: "Book 2", 
    cover: "/covers/gettone.png", 
    innerCover:"/covers/book-inner2.png",
    content: ` <h1>ゲッTONE</h1> 
    <h3>TONE株式会社秋季インターンシップ</h3>
    <p>ゲッTONEは工具の画像をAIを通して種類を判別</p>
    <p>し、判明した種類ごとに使用方法をゲームで学習</p>
    <p>するアプリです。</p> `, 
    link: "/" ,      
    spineColor: "#c0392b"
  },
  { 
    id: 3, 
    title: "Book 3", 
    cover: "/covers/book3.png", 
    innerCover:"/covers/book-inner3.png",
    content: ` <h1>玩具業界ポスター</h1> 
    <h3>2回生前期授業「情報デザイン」</h3>
    <p>玩具業界の代表の4社をポスターにしました。各</p>
    <p>会社ごとの目玉となっている商品が大きく描かれ</p>
    <p>ているため、業界を知らない人でもどのような会</p>
    <p>社であるか理解することができます。</p>`, 
    link: "/",      // ← 本3の遷移先
    spineColor:"#386c98"
  },
  { 
    id: 4, 
    title: "Book 4", 
    cover: "/covers/book4.png",
    innerCover:"/covers/book-inner4.png",     
    content: ` <h1>ピンセット</h1> 
    <h3>3回生後期授業「UXデザイン演習」</h3>
    <p>心蕾は入力もしくは選択した感情から様々な花を</p>
    <p>ピンセットは、学習を効率的に支援する塾講師向</p>
    <p>けのシステムです。AIが生徒の苦手を分析し、類</p>
    <p>似問題の抜粋や制作をおこないます。</p> `, 
    link: "/",        // ← 本4の遷移先
    spineColor:"#dcbb3b"
  },
  { 
    id: 5, 
    title: "Book 5", 
    cover: "/covers/book5.png", 
    innerCover:"/covers/book-inner5.png",
    content: ` <h1>製品分析</h1> 
    <h3>3回生後期授業「UXデザイン演習」</h3>
    <p>心蕾は入力もしくは選択した感情から様々な花を</p>
    <p>「リュックサック」をケーススタディとして、視</p>
    <p>覚言語に対応する概念の抽出と、抽出した概念を</p>
    <p>組み合わせることにより、自分なりのリュックサッ</p>
    <p>クを作成しました。</p> `, 
    link: "/",        // ← 本5の遷移先
    spineColor:"#53547b"
  },
  { 
    id: 6, 
    title: "Book 6", 
    cover: "/covers/book6.png", 
    innerCover:"/covers/book-inner6.png",
        content: ` <h1>印象マップ</h1>
    <h3>3回生前期授業「デザイン企画論A」</h3>
    <p>心蕾は入力もしくは選択した感情から様々な花を</p> 
    <p>グループ活動で行ったKJ法を個人で行ったAHP法</p>
    <p>と組み合わせてインフォグラフィクスにしました。</p>
    <p>重要な要素を色や大きさ、イラストでわかりやす</p>
    <p>いデザインにしました。</p>`, 
    link: "/",      // ← 本6の遷移先
    spineColor:"#9bb68f"
  },
  { 
    id: 7, 
    title: "Book 7", 
    cover: "/covers/book7.png", 
    innerCover:"/covers/book-inner7.png",
        content: ` <h1>自主制作</h1> 
    <p>心蕾は入力もしくは選択した感情から様々な花を</p>
    <p>部活では、気ままに創作イラストを描いています。</p>
    <p>今年度は初めてフリーマーケットでイラストグッ</p>
    <p>ズの販売をおこない、3万7千円の収益をあげるこ</p>
    <p>とができました。時々大学のGameJamに参加して</p>
    <p>います。</p>  `, 
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
        <p>profile</p>
        <h1>自己紹介</h1>
      </div>    
        
      <section class = "content">        
        <div class = "photo">
          <img
              src = "/covers/icon.jpg"
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
        <div className = "photo2">
          <img
              src = "/covers/profile2.png"
              alt = "my icon"
              className="photoimg"
          />
        </div>
        <p>illustratorによる基本のデザイン、方法論による分析、柔軟な発想を行うことができます。柔軟な発想はプログラミングを学習したことで身についたものであり、試行錯誤をくり返しつつ複数ある正解の形に近づいていく思考をデザインに活かしています。分析による、感覚的ではない根拠のある論理的なデザインが得意です</p>

      </section>

      <footer className="footer">
        <p>© 2026 Taneya Yuuka</p>
      </footer>
    </>
  );
}
