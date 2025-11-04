"use client";
import { useEffect, useState } from "react";

export default function LastCommit() {
  const [text, setText] = useState("loading...");

  useEffect(() => {
    async function loadLastCommit() {
      const username = "lyanbrito";
      const repo = "portifolio.next";

      const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
      const data = await response.json();

      const lastCommitDate = new Date(data[0].commit.committer.date);
      const now = new Date();

      const diffMs = now.getTime() - lastCommitDate.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

      // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
      let formatted;

      if (diffDays < 1) {
        formatted = "today";
      } else if (diffDays < 30) {
        formatted = rtf.format(-diffDays, "day");
      } else {
        const months = Math.floor(diffDays / 30);
        formatted = rtf.format(-months, "month");
      }

      setText(`${username} (${formatted})`);
    }

    loadLastCommit();
  }, []);

  return <p id="lastCommit">{text}</p>;
}
