import { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
// import "highlight.js/styles/dark.css";

type QuillEditorT = {
  readonly?: boolean;
  defaultValue?: string;
};

const quil = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ font: [] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ direction: "rtl" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["link", "image"],
      ["clean"],
    ],
    // image: {
    //   resizer: {
    //     handleStyles: {
    //       backgroundColor: "black",
    //       border: "none",
    //       borderRadius: "0",
    //     },
    //   },
    // },
  },
  theme: "snow",
  formats: ["header", "code-block", "link"],
};

const QuillEditor: React.FC<QuillEditorT> = ({
  readonly = false,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue || "");

  // const onSubmit = () => {
  //   console.log(value);
  //   localStorage.setItem("post", JSON.stringify(value));
  // };

  return (
    <>
      <ReactQuill
        value={value}
        onChange={setValue}
        theme={readonly ? "bubble" : quil.theme}
        modules={quil.modules}
        readOnly={readonly}
        formats={["link"]}
      />

      {/* <button onClick={onSubmit}>Publish</button> */}
    </>
  );
};

export default QuillEditor;
