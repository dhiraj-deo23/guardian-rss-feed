import fetch from "node-fetch";

const sectionList = async () => {
  const response = await fetch(
    "https://content.guardianapis.com/sections?api-key=985dc525-caa9-4132-b63a-cb9630774fbf"
  );
  const sections = await response.json();
  const content = sections.response.results.map((result) => result.id);
  return content;
};

export default sectionList;
