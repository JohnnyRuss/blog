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
    <button className="password-field__eye-btn" onClick={onToggle}>
      {shown ? <EyeOpen /> : <EyeClose />}
    </button>
  );
};

export default EyeButton;
