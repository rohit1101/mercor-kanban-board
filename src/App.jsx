import { useEffect } from "react";
import WebFont from "webfontloader";
import Layout from "./components/Layout/Layout";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "sans-serif"],
      },
    });
  }, []);

  return <Layout>Content</Layout>;
}

export default App;
