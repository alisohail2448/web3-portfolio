import { useState, useEffect } from "react";
import "./Experience.css";
import { SlCalender } from "react-icons/sl";

const Experience = ({ state }) => {
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const { contract } = state;
    const educationDetails = async () => {
      const education = await contract.methods.allEductationDetails().call();
      setEducation(education);
    };
    const experienceDetails = async () => {
      const experience = await contract.methods.allExperienceDetails().call();
      setExperience(experience);
      console.log(experience);
    };
    contract && educationDetails();
    contract && experienceDetails();
  }, [state]);
  return (
    <section className="exp-section">
      <h1 className="title">Experience & Education </h1>

      <div className="container">
        <div className="education">
          <h1 className="edu-tittle">Education</h1>
          {education !== "" &&
            education.map((edu, index) => {
                if(index === 0){
                    return (
                        <div className="edu-card" key={index}>
                          <p className="card-text1">
                            <SlCalender className="icon" /> {edu.date}
                          </p>
                          <h3 className="card-text2">{edu.degree}</h3>
                          <p className="card-text3">{edu.knowledgeAcquired}</p>
                          <p className="card-text4">{edu.instutionName}</p>
                        </div>
                      );
                }
                return null;
            })}
        </div>
        {/* experience */}
        <div className="education">
          <h1 className="edu-tittle">Experience</h1>
          {experience &&
            experience?.map((exp, index) => {
              if(index === 0){
                return (
                    <div className="edu-card" key={index} >
                      <p className="card-text1">
                        <SlCalender className="icon" /> {exp.date}
                      </p>
                      <h3 className="card-text2">{exp.post}</h3>
                      <p className="card-text3">
                       {exp.knowledgeAcquired}
                      </p>
                      <p className="card-text4">{exp.compamyName}</p>
                    </div>
                  );
              }
              return null;
            })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
