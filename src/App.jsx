import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post
        title="React.js is Awesome"
        content="React is awesome because it lets you build dynamic user interfaces efficiently using reusable components and simple state management."
      />
      <Post
        title="Component-based architecture rocks"
        content="React is awesome because it breaks the UI into reusable components which makes code cleaner, scalable, and easy to maintain."
      />
      <Post
        title="Fast and responsive apps with React"
        content="React is awesome because its virtual DOM optimizes updates and makes applications faster and more responsive."
      />
      <Post
        title="Developer-friendly ecosystem"
        content="React is awesome because it has a huge ecosystem, strong community support, and tons of libraries that speed up development."
      />
    </main>
  );
}

export default App;
