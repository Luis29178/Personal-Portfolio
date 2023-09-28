import React, { useState } from "react";
import InputField from "./InputField";
import { firestore } from "../../FirebaseConfig";
import { addDoc, collection, setDoc, getDoc, doc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

function TestimonialCreateComponent() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [testimonialText, settestimonialText] = useState("");
  const [occupation, setoccupation] = useState("");
  const [loading, setloading] = useState(false);
  // Use state to store the input value

  const handlefirstNameChange = (e) => {
    setfirstName(e.target.value); // Update the state with the new input value
    console.log(e.target.value);
  };
  const handlastNameChange = (e) => {
    console.log(e.target.value);
    setlastName(e.target.value); // Update the state with the new input value
  };
  const handletestimonialTextChange = (e) => {
    settestimonialText(e.target.value); // Update the state with the new input value
    console.log(e.target.value);
  };
  const handlecompanyNameChange = (e) => {
    setoccupation(e.target.value); // Update the state with the new input value
    console.log(e.target.value);
  };

  const checkIfDocumentExists = async (collectionName, docId) => {
    const docRef = doc(firestore, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return true;
    } else {
      console.log("Document does not exist!");
      return false;
    }
  };
  
  const generateAlert = () => {
      let error = "Please provide "
      if(firstName == ""){
          error = error+"First Name, "
      }
      if(lastName == ""){
        error = error+"Last Name, "
      }
      if(testimonialText == ""){
        error = error+"Testimonial, "
      }
      error = error.slice(0,-2)
      error = error+"."

      alert(error);
    
  }

  const handleSubmit = async () => {
    

    if (firstName !== "" && lastName !== "" && testimonialText !== "") {
      setloading(true);
      try {
        console.log(firstName, lastName, testimonialText, occupation);
        const newTestimonial = {
          firstName: firstName,
          lastName: lastName,
          testimonialText: testimonialText,
          occupation: occupation == "" ? "--" : occupation,
          passedReview: false,
        };
        if (!checkIfDocumentExists("Testimonials", `${firstName}${lastName}`)) {
        }
        await setDoc(
          doc(firestore, `Testimonials`, `${firstName}${lastName}`),
          newTestimonial
        ).then(() => {
          setloading(false);

          settestimonialText(
            "Submission will be reviewed before being posted live. Thankyou!!!"
          );
          setfirstName("");
          setlastName("");
          setoccupation("");

          emailjs
          .send(
            {
              from_name: `${firstName} ${lastName}`,
              to_name: "Luis Bazaldua",
              from_email: "",
              to_email: "@gmail.com",
              message: `Testimonial Created by ${firstName} ${lastName} \n Testimonial: ${testimonialText}`,
            },
          )

          setTimeout(() => {
            settestimonialText("");
          }, 5000);
        });
      } catch (error) {
        alert("Something went wrong!!")
      }
    }
    else{

      generateAlert();

    }
  };

  return (
    <>
      <div className="flex flex-row  mt-5 mb-4 ">
        <div className="h-[2.25em] w-full mr-1 bg-tertiary pl-3 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium">
          <InputField
            value={firstName}
            handleChange={handlefirstNameChange}
            placeholder="First Name"
          />
        </div>
        <div className="h-[2.25em] w-full ml-1 bg-tertiary pl-3 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium">
          <InputField
            value={lastName}
            handleChange={handlastNameChange}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <div className="h-[9em] w-full mb-3  bg-tertiary pl-3 pt-[.5em] pb-[.5em] placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium">
          <textarea
            className="w-full h-full bg-transparent resize-none text-white focus:outline-none"
            placeholder=" Testimonial ..."
            value={testimonialText}
            onChange={handletestimonialTextChange}
            maxLength={180}
          />
        </div>
      </div>

      <div className="flex flex-row w-full h-[2.25em] justify-between">
        <div className="h-full w-[60%] bg-tertiary pl-3 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium">
          <InputField
            placeholder="Occupation (Optional)"
            value={occupation}
            handleChange={handlecompanyNameChange}
          />
        </div>
        <button
          className="flex justify-center items-center h-full w-[35%] bg-tertiary outline-non shadow-md shadow-primary rounded-xl text-bold text-white"
          onClick={handleSubmit}
        >
            {loading ? "Submiting..." : "Submit"}
          
        </button>
      </div>
    </>
  );
}

export default TestimonialCreateComponent;
