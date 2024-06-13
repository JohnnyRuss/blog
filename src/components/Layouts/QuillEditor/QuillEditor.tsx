import { useState, useEffect } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";

import { quillConfig as quill } from "@/utils";

import { ErrorMessage, ModalSlider } from "@/components/Layouts";

type QuillEditorT = {
  value?: string;
  readonly?: boolean;
  error?: boolean;
  message?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

const QuillEditor: React.FC<QuillEditorT> = ({
  error,
  message,
  value = "",
  setValue,
  readonly = false,
}) => {
  const onChange = (value: string) => {
    setValue && setValue(value);
  };

  const [sliderImages, setSliderImages] = useState<Array<string>>([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(NaN);

  useEffect(() => {
    if (!readonly) return;

    const quillEl = document.querySelector(".quill");
    if (!quillEl) return;

    const imageElements = quillEl.querySelectorAll("img");

    const imgSources = Array.from(imageElements)
      .map((imgEl) => imgEl.getAttribute("src") || "")
      .filter((src) => src !== "");

    setSliderImages(() => [...imgSources]);
  }, [readonly, value]);

  useEffect(() => {
    const quillEl = document.querySelector(".quill");

    if (!quillEl) return;

    const imageElements = quillEl.querySelectorAll("img");

    const onImageClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;

      const imgSrc =
        target.tagName === "IMG" && target.getAttribute("src")
          ? target.getAttribute("src")
          : "";

      if (!imgSrc) return;

      const activeImgIndex = sliderImages.findIndex((img) => img === imgSrc);
      setActiveSlideIndex(activeImgIndex);
    };

    imageElements.forEach((el) => el.addEventListener("click", onImageClick));

    return () => {
      imageElements.forEach((el) =>
        el.removeEventListener("click", onImageClick)
      );
    };
  }, [sliderImages, activeSlideIndex]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ReactQuill
          value={value}
          onChange={onChange}
          {...quill}
          theme={readonly ? "bubble" : quill.theme}
          readOnly={readonly}
          id="quill"
        />

        {error && <ErrorMessage message={message || ""} />}
      </div>

      {readonly && sliderImages.length > 0 && !isNaN(activeSlideIndex) && (
        <ModalSlider
          images={sliderImages}
          startIndex={activeSlideIndex}
          onClose={() => setActiveSlideIndex(NaN)}
        />
      )}
    </>
  );
};

export default QuillEditor;
