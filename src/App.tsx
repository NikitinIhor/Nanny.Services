import { lazy, Suspense, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import MainLoader from "./components/MainLoader/MainLoader";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [loader, setLoder] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoder(false);
    }, 3000);
  }, [setLoder]);

  if (loader) return <MainLoader />;

  return (
    <>
      <Toaster />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nannies" element={<Nannies />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
