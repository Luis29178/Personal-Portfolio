import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";
import TestimonialCreateComponent from "./FunctionalComponents/TestimonialCreate";
import { firestore } from "../FirebaseConfig.jsx";
import { collection, query, where, getDocs } from "firebase/firestore";

const FeedbackCard = ({
  index,
  testimonialText,
  firstName,
  lastName,
  designation = "-",
  occupation,
  image = "",
}) => (
  <motion.div
    variants={fadeIn("", "sprinig", 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>
    <div className="mt-1">
      <p className="text-white traking-wider text-[18px]">{testimonialText}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span>{" "}
            {`${firstName} ${lastName}`}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {occupation} {designation == "-" ? "" : ` of ${designation}`}
          </p>
        </div>

        {image == "" ? (
          <></>
        ) : (
          <img
            src={image}
            alt={`feedback-by-${firstName} ${lastName}`}
            className=" w-10 h-10 rounded-full object-cover"
          ></img>
        )}
      </div>
    </div>
  </motion.div>
);

const CreateTestemonial = ({}) => (
  <motion.div
    variants={fadeIn("", "sprinig", 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full"
  >
    <div className="mt-1">
      <p className="text-white traking-wider text-[18px]">Add Testimonial</p>
      <TestimonialCreateComponent />
      {/* Add Import Img func*/}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [data, setData] = useState([]); // Store the fetched documents here

  useEffect(() => {
    try {
      const fetchData = async () => {
        const q = query(
          collection(firestore, "Testimonials"),
          where("passedReview", "==", true)
        );
        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(...docs);
        setData(docs);
      };

      fetchData();
    } catch (e) {
      console.error("Error fetching testimonials:", e);
    }
  }, []);

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}> What other say about me</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {data.map((doc) => (
          <FeedbackCard
            key={doc.id}
            {...doc}
          />
        ))}
      </div>
      <div className="px-[15px] pb-[15px]">
        <CreateTestemonial />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
