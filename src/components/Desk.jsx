import BookContent from "./BookContent";

export default function Desk({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="desk">
      <div className="book-open">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{book.title}</h2>
        <BookContent text={book.content} />
      </div>
    </div>
  );
}
