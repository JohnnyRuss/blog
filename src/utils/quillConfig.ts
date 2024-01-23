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
  modules: {
    syntax: {
      highlight: (text: string) => hljs.highlightAuto(text).value,
    },
    toolbar: [
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
    clipboard: {
      matchVisual: true,
    },
  },
  theme: "snow",
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
