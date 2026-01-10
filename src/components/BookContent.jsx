export default function BookContent({ text }) {
  return (
    <div className="book-content">
      {text.split("\n").map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}
