import { PrivateIcon, PublicIcon } from "@/components/Layouts/Icons";

type ListPrivacyT = { privacy: string };

const ListPrivacy: React.FC<ListPrivacyT> = ({ privacy }) => {
  return (
    <figure>{privacy === "PRIVATE" ? <PrivateIcon /> : <PublicIcon />}</figure>
  );
};

export default ListPrivacy;
