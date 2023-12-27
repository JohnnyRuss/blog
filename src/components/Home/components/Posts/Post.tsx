import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

import { LineClamp, CategoryChip } from "@/components/Layouts";

type PostT = {};

const Post: React.FC<PostT> = () => {
  const theme = useTheme();

  return (
    <Link to="#">
      <li className="posts-list__item">
        <figure className="posts-list__item-fig">
          <img
            width="100%"
            height="100%"
            src="https://images.unsplash.com/photo-1600810457779-5250a03d83e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="post"
          />
        </figure>

        <div className="posts-list__item-content">
          <div className="posts-list__item-content--header">
            <div className="posts-list__item-content--header__user">
              <figure className="posts-list__item-content--header__user-fig">
                <img
                  width={40}
                  height={40}
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MHwwfHx8MA%3D%3D"
                  alt="person"
                />
              </figure>

              <div className="posts-list__item-content--header__user-block">
                <p className="posts-list__item-content--header__user-block--username">
                  Tom Odel
                </p>
                <span className="posts-list__item-content--header__user-block--date">
                  13.10.2023
                </span>
              </div>
            </div>

            <CategoryChip bgColor="#B33F00" size="md" title="Culture" />
          </div>

          <LineClamp clamp={2} component="h3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            velit quia ducimus error quasi harum eligendi mollitia nostrum nam
            dolorum.
          </LineClamp>

          <LineClamp
            clamp={7}
            sx={{
              fontSize: theme.fontSize.sm,
              color:
                theme.mode === "dark"
                  ? theme.colors.gray
                  : theme.colors.gray_dark,
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, quis perspiciatis explicabo quia aliquam ipsam
              similique eligendi voluptas sed tempora nihil molestias vel
              possimus quo animi doloribus, ut expedita nemo harum neque
              blanditiis. Necessitatibus debitis repellat doloribus laboriosam
              reiciendis veritatis recusandae sequi aperiam cumque.
            </p>
            <p>
              consectetur quam totam blanditiis laudantium a similique omnis
              dolores neque voluptas inventore cum, maiores eius. Optio
              accusamus, ipsam totam minus quas placeat sed deserunt natus animi
              neque eos molestias debitis expedita aut beatae in consectetur
              maiores. Sunt eius quas, necessitatibus soluta, odio provident
              obcaecati, fugit quidem dolores dolor perferendis! Similique
              eligendi voluptas eaque aut. Possimus, ut!
            </p>
          </LineClamp>

          <button className="hero__post-content--more__btn">
            <strong>
              <u>View More</u>
            </strong>
          </button>
        </div>
      </li>
    </Link>
  );
};

export default Post;
