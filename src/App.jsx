import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post
        title="React.js is Awesome"
        content="React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. With React, you can build complex and interactive web applications with ease."
      />
      <Post
        title=""
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue."
      />
      <Post
        title="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue."
      />
      <Post
        title="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue."
      />
    </main>
  );
}

export default App;
