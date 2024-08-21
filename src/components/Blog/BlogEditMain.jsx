import { ChildOneInside } from "../My Card/ChildOneInside";
import React, { useState, useRef} from "react";
import styles from "./blog.module.scss";
import JoditEditor from "jodit-react";
import { Toggle } from "../DumpComponent/Toggle";

const BlogEditMain = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  

  return (
    <div className={styles.BlogEdit_Main}>
      <div className={styles.feature_btn_blog}>
        <h1>Featured: </h1>
        <Toggle/>
      </div>
      <div className={styles.blogedit_header_main}>
        <div className={styles.blogedit_input_main}>
          <h2>Heading</h2>
          <input type="text" />
          <h2>Meta Description</h2>
          <textarea
            type="text"
            rows="5"
            placeholder="San Jose , USA"
          ></textarea>
        </div>
        <div className={styles.blog_img_cover}>
          <h2>Cover Image</h2>
          <ChildOneInside  className={styles.blog_upload_img} />
        </div>
      </div>
      <div className={styles.Blog_Text_main}>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {setContent(newContent)}}
        />
        <div className="w-full text-right">
          <button className={styles.Blog_submit_btn}>Submit</button>
        </div>
        </div>
    </div>
  );
};

export default BlogEditMain;
