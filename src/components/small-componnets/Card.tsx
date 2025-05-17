import "./styles.scss";
import {CardProps} from "@/types";

export function Card({title, content}: CardProps) {
    return (
        <div className="card">
            <p className="card-title">{title}</p>
            <p>{content}</p>
        </div>
    );
}
