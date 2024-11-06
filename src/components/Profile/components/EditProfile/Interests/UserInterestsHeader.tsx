import { useSearchParams } from "@/hooks/utils";

import { SectionTitle } from "@/components/Layouts";
import { Edit } from "@/components/Layouts/Icons";

const UserInterestsHeader: React.FC = () => {
  const { setParam } = useSearchParams();

  const onOpenEdit = () => setParam("interests", "1");

  return (
    <div className="user-interests__header">
      <SectionTitle title="Your Interests" />

      <button className="edit-interests__btn" onClick={onOpenEdit}>
        <span>Fit Your Interests</span>
        <span>
          <Edit />
        </span>
      </button>
    </div>
  );
};

export default UserInterestsHeader;
