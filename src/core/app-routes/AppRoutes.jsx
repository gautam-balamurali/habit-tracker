/* eslint-disable */

import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/home-page/HomePage";
import ArchivePage from "../../pages/archive-page/ArchivePage";
import PageNotFounPage from "../../pages/page-not-found-page/PageNotFounPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/archived-habit" element={<ArchivePage />} />
      <Route path="*" element={<PageNotFounPage />} />
    </Routes>
  );
};

export default AppRoutes;
