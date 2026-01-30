import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
      <>
      <h1>oi</h1>
        <iframe
            src={"http://localhost:3000/"}
            style={{ height: "100%", width: "100%" }}
            loading="lazy"
        >

        </iframe>
      </>
  );
}
