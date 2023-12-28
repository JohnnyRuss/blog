import * as Styled from "./styles/cardHead.styled";

type CardHeadT = {};

const CardHead: React.FC<CardHeadT> = () => {
  return (
    <Styled.CardHead>
      <figure className="card-head__fig">
        <img
          width="25px"
          height="25px"
          title="card"
          loading="lazy"
          src="https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg"
          alt="card"
        />
      </figure>

      <p className="card-head__user">
        <span className="card-head__user-name">Tom Odell</span>
        <span className="card-head__user-work">
          {" "}
          <sup>
            <small>in</small>
          </sup>{" "}
          <span>Towards Data Science</span>
        </span>
      </p>
    </Styled.CardHead>
  );
};

export default CardHead;
