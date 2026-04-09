import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/RouteConfig.jsx";
import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
   function AppRoutes() {
      const routing = useRoutes(routes);
      return routing;
   }

   return (
      <BrowserRouter>
         <AppRoutes />
      </BrowserRouter>
   );

}

export default App;
