type FooterT = {
  onSaveChanges: () => void;
  setCheckNeverShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer: React.FC<FooterT> = ({ onSaveChanges, setCheckNeverShow }) => {
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCheckNeverShow(e.target.checked);

  return (
    <div className="fit-interests__footer">
      <div className="fit-interests__footer-checkbox">
        <input type="checkbox" id="never-show--checkbox" onChange={onCheck} />
        <label htmlFor="never-show--checkbox">don't show again</label>
      </div>

      <button className="save-btn" onClick={onSaveChanges}>
        save changes
      </button>
    </div>
  );
};

export default Footer;
