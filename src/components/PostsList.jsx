import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post
          author="Maximillian"
          content="React is awesome because it lets you build dynamic user interfaces efficiently using reusable components and simple state management."
        />
        <Post
          author="Manuel"
          content="React is awesome because it breaks the UI into reusable components which makes code cleaner, scalable, and easy to maintain."
        />
      </ul>
    </>
  );
}
