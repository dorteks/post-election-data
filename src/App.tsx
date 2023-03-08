import Layout from "./layout";
import Body from "./layout/body";
import AppProvider from "./app/provider";

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <Body />
      </Layout>
    </AppProvider>
  );
};

export default App;
