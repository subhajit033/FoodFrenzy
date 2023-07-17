import React, { useState } from "react";

const Section = ({ title, descrp, isVisible, setIsVisible }) => {
  
  const handleVisibility = () =>{
    setIsVisible();
  }
  return (
    <div className="w-8/12 mx-auto border-2 border-purple-500 py-2 px-3 my-4 rounded-lg">
      <h2 className="text-purple-400 text-2xl font-bold ">{title}</h2>
      <button onClick={handleVisibility} className="bg-purple-400 px-3 py-1 my-1 rounded-md text-white">{isVisible? "Hide": "Show"}</button>
      <p className={`text-sm leading-tight ${isVisible? "block": "hidden"}`}>{descrp}</p>
    </div>
  );
};

const Instamart = () => {
  const[visibleSection, setvisibleSection] = useState("about");
  return (
    <>
      <Section
        title={"About Instamart"}
        descrp={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias nihil libero quaerat unde vel ab, excepturi consequatur, porro sed odit repellendus, nostrum iste officia facere placeat! Voluptas tempora nostrum itaque adipisci molestiae, modi delectus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias nihil libero quaerat unde vel ab, excepturi consequatur, porro sed odit repellendus, nostrum iste officia facere placeat! Voluptas tempora nostrum itaque adipisci molestiae, modi delectus?"
        }
        isVisible = {visibleSection === "about"}
        setIsVisible = {()=>{
          visibleSection !== "about"? setvisibleSection("about"): setvisibleSection("");
        }}
      />
      <Section
        title={"Team"}
        descrp={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias nihil libero quaerat unde vel ab, excepturi consequatur, porro sed odit repellendus, nostrum iste officia facere placeat! Voluptas tempora nostrum itaque adipisci molestiae, modi delectus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias nihil libero quaerat unde vel ab, excepturi consequatur, porro sed odit repellendus, nostrum iste officia facere placeat! Voluptas tempora nostrum itaque adipisci molestiae, modi delectus?"
        }
        isVisible = {visibleSection === "team"}
        setIsVisible = {()=>{
          visibleSection !== "team"? setvisibleSection("team"): setvisibleSection("");
        }}
      />
      <Section
        title={"Product"}
        descrp={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias nihil libero quaerat unde vel ab, excepturi consequatur, porro sed odit repellendus, nostrum iste officia facere placeat! Voluptas tempora nostrum itaque adipisci molestiae, modi delectus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias nihil libero quaerat unde vel ab, excepturi consequatur, porro sed odit repellendus, nostrum iste officia facere placeat! Voluptas tempora nostrum itaque adipisci molestiae, modi delectus?"
        }
        isVisible = {visibleSection === "product"}
        setIsVisible = {()=>{
          visibleSection !== "product"? setvisibleSection("product"): setvisibleSection("");
        }}
      />
    </>
  );
};

export default Instamart;
