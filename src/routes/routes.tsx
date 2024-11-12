import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Root } from "../layout";
import { ContactPage, Home, WorksPage } from "../pages";

// Configure nested routes with JSX
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="contact-me" element={<ContactPage />} />
      <Route path="works" element={<WorksPage />} />
    </Route>
  )
);
