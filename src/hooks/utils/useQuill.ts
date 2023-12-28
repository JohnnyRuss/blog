export default function useQuill() {
  const getText = (quillValue: string) => {
    const container = document.createElement("div");
    container.innerHTML = quillValue;

    const textElements = container.querySelectorAll("p");

    const description =
      textElements.length > 0
        ? Array.from(textElements)
            .map((element) => element.textContent)
            .join("\n")
        : "";

    return description;
  };

  return { getText };
}
