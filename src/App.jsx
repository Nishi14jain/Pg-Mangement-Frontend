import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/RouteConfig";
import { useRoutes } from "react-router-dom";

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
