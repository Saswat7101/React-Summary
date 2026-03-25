const names = ["Maximillian", "Manuel"];

export default function Post() {
  const choosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <h1>My First Post</h1>
      <p>{choosenName}</p>
      <p>This is my first post. I hope you like it!</p>
    </div>
  );
}
