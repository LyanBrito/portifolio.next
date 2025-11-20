import NavBar from "@/components/NavBar/NavBar";

export default function AboutMePage() {
    return (
        <>
            <NavBar page={"about-me"} links={["/", "/AboutMePage/AboutMe", "#projects", "contacts"]}/>
            <h1>oi</h1>
        </>
    )
}