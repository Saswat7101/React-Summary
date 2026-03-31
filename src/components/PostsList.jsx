import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredbody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHandler}
  //         onAuthorChange={authorChangeHandler}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} content={enteredbody} />
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
