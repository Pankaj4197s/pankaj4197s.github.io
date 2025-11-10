import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function JPMCJobI() {
  const tasks = [
    {
      text:
        "Collaborated daily with cross‑functional tech and business teams, enhancing operational efficiency and meeting critical deadlines.",
      keywords: ["cross‑functional", "operational efficiency", "deadlines"],
    },
    {
      text:
        "Designed ReactJS frontend for Active Inventory Management (AIM), enabling investment of $1.6B previously uninvested cash in 2022; total invested via AIM in 2022: $188B.",
      keywords: ["ReactJS", "AIM", "$1.6B", "$188B"],
    },
    {
      text:
        "Upgraded authentication and authorization across micro‑services to OAuth2.",
      keywords: ["OAuth2", "authentication", "authorization", "micro‑services"],
    },
    {
      text:
        "Enhanced CI/CD pipelines to latest industry standards using Harness.",
      keywords: ["CI/CD", "Harness", "pipelines"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer I{" "}
            <span className="text-AAsecondary">@ JP Morgan Chase &amp; Co.</span>
          </span>
          <span className="font-mono text-xs text-gray-500">
            July 2019 - January 2022 | Mumbai, India
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
 

