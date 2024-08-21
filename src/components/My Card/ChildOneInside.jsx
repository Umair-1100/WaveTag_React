import styles from "./mycard.module.scss";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { Gallery } from "../../icon/Add";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];
export const ChildOneInside = ({ heading, className }) => {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="group text-center ">
      <h1>{heading}</h1>

      <FileUploader
        handleChange={handleChange}
        dropMessageStyle={{ display: "none" }}
        name="file"
        types={fileTypes}
      >
        <div className={`${styles.child_1_inside} ${className} cursor-pointer`}>
          {file ? (
               <img src={file} alt="" />
          ) : (
            <>
              <Gallery />
              <h2>
                Drop your files here or{" "}
                <span className="group-hover:underline text-[blue]">
                  browse
                </span>
              </h2>
              <p>Maximum size:50MB</p>
            </>
          )}
        </div>
      </FileUploader>
    </div>
  );
};
