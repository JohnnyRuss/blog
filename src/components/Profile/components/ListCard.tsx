import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

import { animateTop } from "@/styles/animations";
import { LineClamp } from "@/components/Layouts";
import * as Styled from "./styles/listCard.styled";

type ListCardT = {};

const ListCard: React.FC<ListCardT> = () => {
  const theme = useTheme();
  return (
    <motion.div {...animateTop({ once: true, inView: true })}>
      <Link to="/123">
        <Styled.ListCard>
          <div className="list-card__content">
            <div className="list-card__content-user">
              <figure className="list-card__content-user--fig">
                <img
                  width={25}
                  height={25}
                  src="https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="user"
                />
              </figure>

              <span className="list-card__content-user--username">
                Tom Odell
              </span>
            </div>

            <LineClamp
              clamp={3}
              component="h3"
              sx={{
                fontSize: theme.fontSize.base,
              }}
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto nam ab ad quas. Molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto nam ab ad quas. Molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto nam ab ad quas. Molestiae."
            />

            <span className="list-card__content-count">25 stories</span>
          </div>

          <div className="list-card__assets">
            <figure className="list-card__assets-fig">
              <img
                width="100%"
                height="100%"
                title="list"
                loading="lazy"
                src="https://images.unsplash.com/photo-1682685797742-42c9987a2c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
                alt=""
              />
            </figure>
            <figure className="list-card__assets-fig">
              <img
                width="100%"
                height="100%"
                title="list"
                loading="lazy"
                src="https://images.unsplash.com/photo-1703717101037-132d2c3fdd03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </figure>
            <figure className="list-card__assets-fig">
              <img
                width="100%"
                height="100%"
                title="list"
                loading="lazy"
                src="https://images.unsplash.com/photo-1703803828769-36c110f2d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </figure>
          </div>
        </Styled.ListCard>
      </Link>
    </motion.div>
  );
};

export default ListCard;
