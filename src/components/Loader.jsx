import { Box } from "@mui/material";
import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <Box sx={{width:"100%", height:"95vh", display:"flex", justifyContent:"center", alignContent:"center", margin:"auto"}}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#3B88F5", "#3B88F5", "#3B88F5", "#3B88F5", "#3B88F5"]}
      />
    </Box>
  );
};

export default Loader;
