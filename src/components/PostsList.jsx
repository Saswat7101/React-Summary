import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

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
