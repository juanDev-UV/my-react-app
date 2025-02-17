import {createRoot} from "react-dom/client";
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Quiz from "./pages/quiz/Quiz.jsx";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Heart from "./pages/heart/Heart.jsx";
import HighBloodPreasure from "./pages/heart/high-blood-preasure/HighBloodPreasure.jsx";
import LowBloodPreasure from "./pages/heart/low-blood-preasure/LowBloodPreasure.jsx";
import Layout from "./layout/Layout.jsx";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="*" element={<NotFound />} />
      <Route path="corazon" element={<Heart />} >
        <Route path="presion-alta" element={<HighBloodPreasure/>} />
        <Route path="presion-Baja" element={<LowBloodPreasure/>} />
      </Route>
    </Routes>
  </Layout>  
  </BrowserRouter>
);