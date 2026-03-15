import React from 'react';
import './Shinrai.css'; // 専用のスタイル

const Shinrai = () => {
        <header className="header">
        <h3>Portfolio Taneya Yuuka</h3>
      </header>
  return (
    <article className="case-study">
      {/* 1. ヒーローセクション */}
      <section className="hero-section">
        <img src="covers/book.png" alt="心蕾" className="hero-img" />
        <div className="hero-text">
          <h1>心蕾</h1>
          <p>感情を記録し、花を咲かせるアプリ</p>
        </div>
      </section>

      {/* 2. 課題とコンセプト（資料スライド2-3） */}
      <section className="detail-section grid">
        <div className="text-content">
          <h2>背景</h2>
          <p>現代社会では、多くの人が慢性的なストレスを抱えています。厚生労働省の調査によると、日本の労
働者の約8割が強いストレスを感じていると報告されています。しかし、ストレスは身体の不調とは
異なり、数値として可視化されにくいです。そのため、自分がどれほど負荷を受けているのかを客観
的に把握する機会は少ないのです。</p>
        </div>
        <div className="visual-content">
          <img src="/covers/data1.png" alt="ストレスの推移" />
        </div>
      </section>

      {/* 3. 感情の可視化（資料スライド5-6） */}
      <section className="analysis-section dark-bg">
        <h2>Emotion Analysis</h2>
        <div className="color-wheel-container">
          {/* ここに資料6枚目の図を配置 */}
          <img src="/covers/data2.png" alt="感情分析図" />
        </div>
      </section>

      {/* 4. 制作プロセス（資料スライド9-10） */}
      <section className="process-section">
        <h2>Process & Future</h2>
        <div className="image-gallery">
          {/* 制作風景や展示写真を並べる */}
        </div>
      </section>
            <footer className="footer">
        <p>© 2026 Taneya Yuuka</p>
      </footer>
    </article>
  );
};

export default Shinrai;