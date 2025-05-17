import {PageProps} from "@/types";
import "./quote.scss";

export default function Quote({page}: PageProps) {
    return (
        <section className="quote-container">
            <div className="quote-text">
                <p>// Você quer armas? Estamos em uma biblioteca!
                 <br/>// Livros! As melhores armas do mundo!</p>
            </div>
            <div className="quote-author">
                <p>- Doctor Who</p>
            </div>
        </section>
    )

}