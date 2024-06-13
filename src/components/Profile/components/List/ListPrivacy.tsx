import { Lock, Public } from "@/components/Layouts/Icons";

type ListPrivacyT = { privacy: string };

const ListPrivacy: React.FC<ListPrivacyT> = ({ privacy }) => {
  return (
    <figure className="privacy-icon">
      {privacy === "PRIVATE" ? <Lock /> : <Public />}
    </figure>
  );
};

export default ListPrivacy;
