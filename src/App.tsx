import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";

import { useRoutes } from "react-router-dom";




function Homepage() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

}

export default Homepage;
