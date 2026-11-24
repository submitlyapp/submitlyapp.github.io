import Markdown from "markdown-to-jsx";

const brandName = "Submitly";

export default function Render({ children }: { children: string }) {
    const markdown = children.replace(
    new RegExp(`\\b${brandName}\\b`, "gi"),
    `<span class="submitly">${brandName}</span>`
    );

  return (
    <Markdown options={{forceInline: true}}>{markdown}</Markdown>
  )
}
