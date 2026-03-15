import React from 'react';
import './Shinrai.css'; // 専用のスタイル

const Shinrai = () => {
  return (
    <article className="case-study">
      {/* 1. ヒーローセクション */}
      <section className="hero-section">
        <img src="/public/covers/book-inner.png" alt="心蕾" className="hero-img" />
        <div className="hero-text">
          <h1>心蕾</h1>
          <p>感情を記録し、花を咲かせるアプリ</p>
        </div>
      </section>

      {/* 2. 課題とコンセプト（資料スライド2-3） */}
      <section className="detail-section grid">
        <div className="text-content">
          <h2>Background</h2>
          <p>現代社会におけるストレスの増加に着目し...</p>
        </div>
        <div className="visual-content">
          <img src="/path-to-graph-image.png" alt="ストレスの推移" />
        </div>
      </section>

      {/* 3. 感情の可視化（資料スライド5-6） */}
      <section className="analysis-section dark-bg">
        <h2>Emotion Analysis</h2>
        <div className="color-wheel-container">
          {/* ここに資料6枚目の図を配置 */}
          <img src="/path-to-wheel.png" alt="感情分析図" />
        </div>
      </section>

      {/* 4. 制作プロセス（資料スライド9-10） */}
      <section className="process-section">
        <h2>Process & Future</h2>
        <div className="image-gallery">
          {/* 制作風景や展示写真を並べる */}
        </div>
      </section>
    </article>
  );
};

export default Shinrai;