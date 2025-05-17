// import Image from "next/image";
import "@/styles/main.scss";
import "./page.scss";
import Header from "@/components/header/header";


export default function Home() {
  return (
      <div className="page">
          <Header page="pg1" />
      </div>
  );
}
