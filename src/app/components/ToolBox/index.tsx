import { toolData } from '../toolData'
import Image from 'next/image'
import './style.scss'
import ToolBoxComponent from './component'
import Link from 'next/link'

export default function ToolBox() {
  return (
    <div className="section">
      {toolData.map(({ id, title, tools }) => (
        <div className="tool-box" key={id}>
          <h2>{title}</h2>

          <ul>
            {tools.map(
              ({ name, imgAlt, linkName, linkTo, linkAria }, index) => (
                <li key={index + 1}>
                  <Image
                    src={`/logos/${name}`}
                    width={30}
                    height={30}
                    alt={imgAlt}
                  />{' '}
                  &ndash;
                  <Link href={linkTo} target="_blank" aria-label={linkAria}>
                    {linkName}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}
