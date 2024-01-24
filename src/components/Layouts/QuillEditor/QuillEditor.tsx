import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";

import { quillConfig as quill } from "@/utils";

import { ErrorMessage } from "@/components/Layouts";

type QuillEditorT = {
  value?: string;
  readonly?: boolean;
  error?: boolean;
  message?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

const QuillEditor: React.FC<QuillEditorT> = ({
  error,
  message,
  value = "",
  setValue,
  readonly = false,
}) => {
  const onChange = (value: string) => {
    setValue && setValue(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ReactQuill
        value={value}
        onChange={onChange}
        {...quill}
        theme={readonly ? "bubble" : quill.theme}
        readOnly={readonly}
        id="quill"
      />

      {error && <ErrorMessage message={message || ""} />}
    </div>
  );
};

export default QuillEditor;
