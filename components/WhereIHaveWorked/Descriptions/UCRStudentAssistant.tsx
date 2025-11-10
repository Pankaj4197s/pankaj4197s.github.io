import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function UCRStudentAssistant() {
  const tasks = [
    {
      text:
        "Contributed to the modernization and maintenance of the TA Assignment System used by the Computer Science Department, improving TA‑course matching efficiency and contract generation.",
      keywords: [
        "modernization",
        "maintenance",
        "TA Assignment System",
        "Computer Science Department",
        "matching efficiency",
        "contract generation",
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Student Assistant | Full Stack Developer{" "}
            <span className="text-AAsecondary">@ University of California, Riverside</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            February 2025 - Present | Riverside, California
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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
 

