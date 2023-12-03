interface ToolBoxComponentProps {
  toolId: number
  toolTitle: string
  toolImgSrc: string
  toolImgAlt: string
  toolLink: string
  toolLinkName: string
}
export default function ToolBoxComponent(props: ToolBoxComponentProps) {
  return (
    <div>
      <h2 id={props.toolTitle}>{props.toolTitle}</h2>
      <ul>
        <li>
          <img src={props.toolImgSrc} alt={props.toolImgAlt} />
          <a href={props.toolLink}>{props.toolLinkName}</a>
        </li>
      </ul>
    </div>
  )
}
