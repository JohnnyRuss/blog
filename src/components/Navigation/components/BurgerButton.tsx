import { Burger, Close } from "@/components/Layouts/Icons";

type BurgerButtonT = {
  open: boolean;
  onOpen: () => void;
};

const BurgerButton: React.FC<BurgerButtonT> = ({ onOpen, open }) => {
  return (
    <button className="nav__burger-btn" onClick={onOpen}>
      {!open ? <Burger /> : <Close />}
    </button>
  );
};

export default BurgerButton;
