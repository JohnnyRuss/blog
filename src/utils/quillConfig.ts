import { QuillOptions } from "react-quill";
import hljs from "highlight.js";

hljs.configure({
  languages: [
    "javascript",
    "html",
    "css",
    "scss",
    "typescript",
    "bash",
    "json",
  ],
});

const quillConfig: QuillOptions = {
  theme: "snow",
  modules: {
    syntax: {
      highlight: (text: string) => hljs.highlightAuto(text).value,
    },
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ["blockquote", "code-block"],
        ["link", "image", "video"],
        ["bold", "italic", "underline", "strike"],
        [{ align: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ direction: "rtl" }, "clean"],
      ],
    },
    clipboard: {
      matchVisual: true,
    },
  },
  formats: [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "align",
    "color",
    "background",
    "script",
  ],
};

export default quillConfig;
