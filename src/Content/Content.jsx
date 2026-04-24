import { Box } from "@mui/material";
import ContentItem from "./ContentItem";

const contentArray = [
  {
    title: "Get Things Done",
    description:
      "Modern clean and responsive web experience designed to deliver fast performance and great usability",
    img: "/1.jpg",
  },
  {
    title: "Productivity Is Briliant",
    description:
      "Modern clean and responsive web experience designed to deliver fast performance and great usability",
    img: "/2.jpg",
  },
  {
    title: "Fast Development",
    description:
      "Modern clean and responsive web experience designed to deliver fast performance and great usability",
    img: "/3.jpg",
  },
];

const Content = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#fbf2f2",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {contentArray.map((cont, i) => (
        <ContentItem
          key={i}
          title={cont.title}
          description={cont.description}
          img={cont.img}
          swap={i % 2 !== 0}
        />
      ))}
    </Box>
  );
};

export default Content;
