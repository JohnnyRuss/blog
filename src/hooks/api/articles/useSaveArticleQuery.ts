import { NODE_MODE } from "@/config/env";
import { articleStore } from "@/store";

import { SaveArticleArgsT } from "@/interface/db/article.types";

export default function useSaveArticleQuery() {
  const status = articleStore.use.saveStatus();
  const save = articleStore.use.save();
  const getLists = articleStore.use.getLists();

  const onGetLists = async () => {
    try {
      await getLists();
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  const onSave = async (args: SaveArticleArgsT) => {
    try {
      await save(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return { status, onSave, onGetLists };
}
