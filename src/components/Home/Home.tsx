import * as UI from "./components";
import * as Styled from "./home.styled";

const Home: React.FC = () => {
  return (
    <Styled.Home>
      <UI.Hero />

      <UI.Categories />

      <div className="content-box">
        <UI.Articles />

        <UI.Aside />
      </div>
    </Styled.Home>
  );
};

export default Home;
