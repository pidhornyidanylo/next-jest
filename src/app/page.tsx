import React from "react";
import { connectToDb } from "@/lib/db";

const Home = async () => {
  const db = await connectToDb();
  if (db.isConnected) {
    return (
      <>
        <h2>Testing Next</h2>
      </>
    );
  }
  return <h2>Waiting for connection</h2>;
};

export default Home;
