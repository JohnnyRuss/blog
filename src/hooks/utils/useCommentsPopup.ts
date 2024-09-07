import { useSearchParams } from "@/hooks/utils";

export default function useCommentsPopup() {
  const { getParam, removeParam } = useSearchParams();

  const isOpenedComments =
    (getParam("comments") === "1" && getParam("article") !== "") || "";

  const onCloseComments = () => {
    removeParam("comments");
    removeParam("article");
  };

  return { isOpenedComments, onCloseComments };
}
