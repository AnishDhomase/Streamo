import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    try {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
        setVideos(data.items);
        setLoader(false);
      });
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  }, [selectedCategory]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
          <Box
            sx={{
              height: { sx: "auto", md: "92vh" },
              borderRight: "1px solid #365486",
              px: { sx: 0, md: 2 },
            }}
          >
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Box>

          <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
              sx={{ color: "#3B88F5" }}
            >
              {selectedCategory}{" "}
              <span style={{ color: "#365486" }}>videos</span>
            </Typography>

            <Videos videos={videos} />
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Feed;
