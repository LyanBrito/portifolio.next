import HomePage from "@/pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import LoaderPage from "./Loader/LoaderPage";

export default function Home() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);
    let loadedImages = 0;

    if (images.length === 0) {
      setLoading(false);
      return;
    }

    const onImageLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setLoading(false);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.addEventListener("load", onImageLoad);
        img.addEventListener("error", onImageLoad);
      }
    });
  }, []);

  if (loading) return <LoaderPage />;

//   trocar por skeleton por ser + moderno, perfomarico e tem melhor desempenho
    return (
        <>
            <HomePage/>
        </>
    )
}
