import { useState } from "react";

import { QuillEditor } from "@/components/Layouts";

type WriteT = {
  defaultValue?: string;
};

const Write: React.FC<WriteT> = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "");

  return (
    <div>
      <QuillEditor value={value} setValue={setValue} />
    </div>
  );
};

export default Write;
