import Link from 'next/link'
import './style.scss'
import { toolData } from '../toolData'

export default function NavBar() {
  return (
    <div className="header">
      <h1>Dev Tools</h1>
      <ul className="menu">
        {toolData.map(({ title, id }) => (
          <li key={id}>
            <Link href={`#${title}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
