import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OfflinePage = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.offlineMessage}>
          <h1>Oops Offline!</h1>
          <p>
            Your internet connection is not available. Please check your
            connection and try again.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    minHeight: "60vh",
    marginTop: "5rem",
  },
  offlineMessage: {
    backgroundColor: "#ffffff",
    color: "#721c24",
    borderRadius: "5px",
    padding: "15px",
    margin: "20px 0",
  },
};

export default OfflinePage;
