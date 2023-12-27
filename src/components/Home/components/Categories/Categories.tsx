import { motion } from "framer-motion";
import { animateTop, animateBottom } from "@/styles/animations";

import * as Styled from "./categories.styled";
import { SectionTitle, CategoryChip } from "@/components/Layouts";

const Categories: React.FC = () => {
  return (
    <Styled.Categories>
      <SectionTitle title="Popular Products" />

      <ul className="categories__list">
        <motion.li whileInView="onscreen" {...animateBottom({ inView: true })}>
          <CategoryChip
            bgColor="#01415B"
            title="Style"
            img="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </motion.li>

        <motion.li whileInView="onscreen" {...animateTop({ inView: true })}>
          <CategoryChip
            bgColor="#005148"
            title="Fashion"
            img="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D"
          />
        </motion.li>

        <motion.li whileInView="onscreen" {...animateBottom({ inView: true })}>
          <CategoryChip
            bgColor="#019587"
            title="Food"
            img="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHwwfDB8fHww"
          />
        </motion.li>

        <motion.li whileInView="onscreen" {...animateTop({ inView: true })}>
          <CategoryChip
            bgColor="#FFAE00"
            title="Travel"
            img="https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D"
          />
        </motion.li>

        <motion.li whileInView="onscreen" {...animateBottom({ inView: true })}>
          <CategoryChip
            bgColor="#B33F00"
            title="Culture"
            img="https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsdHVyZXxlbnwwfDB8MHx8fDA%3D"
          />
        </motion.li>

        <motion.li whileInView="onscreen" {...animateTop({ inView: true })}>
          <CategoryChip
            bgColor="#D92525"
            title="Coding"
            img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8MHwwfHx8MA%3D%3D"
          />
        </motion.li>
      </ul>
    </Styled.Categories>
  );
};

export default Categories;
