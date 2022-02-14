import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchUrl = "https://localhost:3000"

function TopMovies() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setMovies(response.data);
      });
    }, []);

    return (  );
}

export default TopMovies;