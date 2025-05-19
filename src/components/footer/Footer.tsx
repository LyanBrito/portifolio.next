import { PageProps } from "@/types";
import "./footer.scss";
import {
	AlertIcon,
	BellIcon,
	BranchIcon,
	CommitIcon,
	RefreshIcon,
	VscIcon,
} from "@/assets/icons/export";
import XIcon from "@/assets/icons/XIcon";

export default function Footer({ page }: PageProps) {
	return (
		<footer>
			<div className="footer-R">
				<div className={`git-container page-color ${page}`}>
					<VscIcon width={24} height={24} />
				</div>
				<BranchIcon width={24} height={24} />
				<p>develop*</p>
				<RefreshIcon width={24} height={24} />
				<div className="icons-wrapper">
					<XIcon width={24} height={24} />
					<p>0</p>
					<AlertIcon width={24} height={24} />
					<p>0</p>
				</div>
			</div>
			<div className="footer-L">
				<div className="commit-container">
					<CommitIcon />
					<p>lyanbrito(1 mouth ago)</p>
				</div>
				<p className="columns">Ln 1, Col 1</p>
				<p>CRLF</p>
				<p>{"{}Next.JS"}</p>
				<BellIcon width={24} height={24} />
			</div>
		</footer>
	);
}
