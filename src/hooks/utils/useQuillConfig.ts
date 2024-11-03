import { quillConfig } from "@/utils";
import { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import useQuillEventHandlers from "./useQuillEventHandlers";

export default function useQuillConfig() {
  const quillRef = useRef<ReactQuill | null>(null);

  const { imageHandler } = useQuillEventHandlers(quillRef);

  const modules = useMemo(
    () => ({
      ...quillConfig.modules,
      toolbar: {
        ...quillConfig.modules.toolbar,
        handlers: { image: imageHandler },
      },
    }),
    [imageHandler]
  );

  return {
    quillRef,
    theme: quillConfig.theme,
    formats: quillConfig.formats,
    modules,
  };
}
