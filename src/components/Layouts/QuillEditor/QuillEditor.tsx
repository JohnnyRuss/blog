import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type QuillEditorT = {
  readonly?: boolean;
  defaultValue?: string;
};

const quill = {
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
        theme={readonly ? "bubble" : quill.theme}
        modules={quill.modules}
        readOnly={readonly}
        // formats={["link"]}
      />

      {/* <button
        onClick={onSubmit}
        style={{
          background: "royalblue",
          color: "#fff",
          width: "100%",
          padding: "1.5rem 0",
          marginTop: "2rem",
          borderRadius: "1rem",
        }}
      >
        Publish
      </button> */}
    </>
  );
};

export default QuillEditor;
