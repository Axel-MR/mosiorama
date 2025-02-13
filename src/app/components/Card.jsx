// src/app/components/Card.jsx
import { motion } from "framer-motion";

const Card = ({ id, image, isFlipped, onClick }) => {
  return (
    <motion.div
      className="w-fit h-fit rounded-lg cursor-pointer flex items-center justify-center"
      onClick={() => onClick(id)}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={isFlipped ? image : "/images/tapa.png"}
        alt="card"
        className="w-20 h-34 object-cover"
      />
    </motion.div>
  );
};

export default Card;