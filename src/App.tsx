
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AppRoutes } from "./routes";
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
        <Layout>
          <AppRoutes />
        </Layout>
      <GlobalStyles />
    </>
  )
}

export default App
