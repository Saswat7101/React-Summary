const names = ["Maximillian", "Manuel"];

export default function Post({ title, author, content }) {
  const choosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <h1>{title}</h1>
      <p>{choosenName}</p>
      <p>{content}</p>
    </div>
  );
}
