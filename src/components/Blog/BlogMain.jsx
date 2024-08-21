import styles from "./blog.module.scss";
import { Add, Pen } from "../../icon/Add";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const BlogMain = () => {
  const [removeCard, setRemoveCard] = useState(4);

  return (
    <div className={styles.blog_main}>
      <h1>My Blogs</h1>

      <div className={styles.blog_card_main}>
        {Array.from({ length: removeCard }, () => {
          return (
            <div className={styles.card_blog}>
              <img src="/cardbg.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                atque numquam laudantium magnam assumenda sed.
              </p>
              <div className={styles.blog_btn_main}>
                <NavLink to="/mycard/blog/editcard" className={styles.NavLink_btn}>
                  <Pen />
                  Edit Blog
                </NavLink>
                <button onClick={() => setRemoveCard(removeCard - 1)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <div className={`${styles.card_blog} ${styles.card_blog_new}`}>
          <Add />
          <h3>Create New Blog</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
