import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const [loader, setLoader] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);
      setLoader(false);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "radial-gradient(circle, rgba(15,29,173,1) 0%, rgba(34,197,214,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
