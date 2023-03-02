import Layout from "./layout";
import AppProvider from "./app/provider";
import Body from "./layout/body";

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
