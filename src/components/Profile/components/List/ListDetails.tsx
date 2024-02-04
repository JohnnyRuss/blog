import * as Styled from "./styles/listDetails.styled";

import { getTimeString } from "@/utils";
type ListDetailsT = { title: string; description: string; createdAt: string };

const ListDetails: React.FC<ListDetailsT> = ({
  title,
  createdAt,
  description,
}) => {
  return (
    <Styled.ListDetails>
      <p className="list-header__details-title">{title}</p>

      {description && (
        <p className="list-header__details-description">{description}</p>
      )}

      <p className="list-header__details-date">{getTimeString(createdAt)}</p>
    </Styled.ListDetails>
  );
};

export default ListDetails;
