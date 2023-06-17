import { useEffect } from "react";
import WebFont from "webfontloader";
import Layout from "./components/Layout/Layout";
import Topbar from "./components/organisms/Topbar/Topbar";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "sans-serif"],
      },
    });
  }, []);

  return (
    <Layout>
      <Topbar />
      <p>Content header</p>
      <p>Filters and Share</p>
      <p>Cards</p>
    </Layout>
  );
}

export default App;
