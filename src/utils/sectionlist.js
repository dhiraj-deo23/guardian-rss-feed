import fetch from "node-fetch";

const sectionList = async () => {
  const response = await fetch(
    "https://content.guardianapis.com/sections?api-key=985dc525-caa9-4132-b63a-cb9630774fbf"
  );
  const data = await response.json();
  const sections = data.response.results.map((result) => result.id);
  return sections;
};

export default sectionList;
