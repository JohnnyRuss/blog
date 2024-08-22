import { EyeOpen, EyeClose } from "@/components/Layouts/Icons";

type EyeButtonT = {
  shown: boolean;
  toggleType: (toggle: boolean) => void;
};

const EyeButton: React.FC<EyeButtonT> = ({ shown, toggleType }) => {
  const onToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleType(!shown);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className="password-field__eye-btn"
      style={{
        paddingLeft: "5px",
        backgroundColor: "inherit",
        borderLeft: "1px solid #999",
      }}
    >
      {shown ? <EyeOpen /> : <EyeClose />}
    </button>
  );
};

export default EyeButton;
