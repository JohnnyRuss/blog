import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

import { QuillEditor } from "@/components/Layouts";
import * as Styled from "./write.styled";

type WriteT = {
  defaultValue?: string;
};

const options = [
  { label: "Fashion", value: "grapes", color: "2" },
  { label: "WebDev", value: "mango", color: "1" },
  { label: "Coding", value: "strawberry", color: "3", disabled: false },
];

const Write: React.FC<WriteT> = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "");
  const [selected, setSelected] = useState([]);

  return (
    <Styled.write>
      <textarea placeholder="Title" className="title-input" rows={2} />

      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Categories"
        hasSelectAll={false}
        isCreatable={true}
      />

      <QuillEditor value={value} setValue={setValue} />

      <button className="publish-btn">Publish</button>
    </Styled.write>
  );
};

export default Write;
