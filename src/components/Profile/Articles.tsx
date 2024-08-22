import { useSearchParams } from "@/hooks/utils";

import { CreateListModal } from "@/components/Layouts";
import { ArticlesList } from "./components/Articles";

const Articles: React.FC = () => {
  const { getParam } = useSearchParams();
  const isAddingToList = getParam("save") || "";

  return (
    <>
      <ArticlesList />
      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default Articles;
