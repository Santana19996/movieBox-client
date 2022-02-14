import React, { usestate, useeffect } from "react";
import axios from "axios";

const [post, setPost] = React.useState(null);

React.useEffect(() => {
  axios.get(baseURL).then((response) => {
    setPost(response.data);
  });
}, []);
