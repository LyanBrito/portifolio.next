import Header from "@/components/Main/header/header";
import "../page.scss";
import "@/components/projects/projects.scss"
import { TitleWrapper } from "@/components/small-componnets/TitleWrapper";
import Project from "@/components/small-componnets/Project";
import Footer from "@/components/footer/Footer";

export const metadata = {
    title: "Projects | Lyan Brito",
};

export default function Page({ }) {
    return (
        <div className="page">
            <Header index="\projects&gt;" page="pg2" />
            <div className="all-projects">
                <TitleWrapper page="pg2" index="/" title="projects" />
                <div className="projects">
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj1"
                    />
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj1"
                    />
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj1"
                    />{" "}
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj1"
                    />{" "}
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj1"
                    />
                </div>
            </div>
            <div className="small-projects">
                <TitleWrapper page="pg2" index="/" title="small-projects" />
                <div className="projects">
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj2"
                    />
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj2"
                    />
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj2"
                    />
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj2"
                    />
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj2"
                    />
                    <Project
                        page="pg2"
                        projectDescription="Personal Portifolio"
                        projectTitle="Portifolio"
                        projectImg="https://picsum.photos/305/208"
                        projectAlt="portifolio image"
                        type="pj2"
                    />
                </div>
            </div>
            <Footer page="pg2" />
        </div>
    );
}
