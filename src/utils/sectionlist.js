import fetch from "node-fetch";
import { config } from "dotenv";
config();

const sectionList = async () => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/sections?api-key=${process.env.API_KEY}`
    );
    const data = await response.json();
    if (data.response.status !== "ok")
      throw new Error("section list unavailable!");
    const sections = data.response.results.map((result) => result.id);
    return sections;
  } catch (error) {
    return { error: "section list unavailable" };
  }
};

export default sectionList;
