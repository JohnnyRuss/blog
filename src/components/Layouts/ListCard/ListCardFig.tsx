import { useQuill } from "@/hooks/utils";

type ListCardFigT = { body: string; title: string };

const ListCardFig: React.FC<ListCardFigT> = ({ body, title }) => {
  const { thumbnail } = useQuill(body);

  return (
    <figure className="list-card__assets-fig">
      {thumbnail ? (
        <img
          width="100%"
          height="100%"
          loading="lazy"
          src={thumbnail}
          alt={title}
          title={title}
        />
      ) : (
        <></>
      )}
    </figure>
  );
};

export default ListCardFig;
