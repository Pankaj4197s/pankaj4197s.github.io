import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function JPMCJobII() {
  const tasks = [
    {
      text:
        "Modernized legacy Mule flows to scalable Spring Integration, improving memory efficiency by 44% and eliminating application crashes while remediating vulnerabilities (e.g., Spring Beans).",
      keywords: [
        "Mule",
        "Spring Integration",
        "memory efficiency",
        "44%",
        "vulnerabilities",
        "Spring Beans",
      ],
    },
    {
      text:
        "Migrated 50 GB production databases from Sybase ASE to Microsoft SQL Server with zero downtime.",
      keywords: ["Sybase ASE", "MSSQL Server", "migration", "zero downtime"],
    },
    {
      text:
        "Containerized legacy applications and migrated from on‑prem to Amazon Web Services (AWS EKS).",
      keywords: ["containerized", "AWS", "EKS", "on‑prem"],
    },
    {
      text:
        "Built Active Inventory Management (AIM) Cash Optimization on Signavio BDM for Cash and Portfolio Managers to actively manage residual cash before close of day.",
      keywords: ["AIM", "Signavio BDM", "Cash Optimization", "residual cash"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer II{" "}
            <span className="text-AAsecondary">@ JP Morgan Chase &amp; Co.</span>
          </span>
          <span className="font-mono text-xs text-gray-500">
            January 2022 - September 2024 | Mumbai, India
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
 

