type ExpandButtonT = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExpandButton: React.FC<ExpandButtonT> = ({ expand, setExpand }) => {
  return (
    <button className="expand-btn" onClick={() => setExpand((prev) => !prev)}>
      {expand ? "Shrink" : "Expand"}
    </button>
  );
};

export default ExpandButton;
