import Link from 'next/link'
import './style.scss'

export const links = [
  { linkName: 'Inspiration' },
  { linkName: 'Colors' },
  { linkName: 'Master' },
  { linkName: 'HTML5' },
  { linkName: 'Fonts' },
  { linkName: 'Images' },
  { linkName: 'Icons' },
  { linkName: 'Templates' },
  { linkName: 'Challenges' },
  { linkName: 'Others' }
]

export default function NavBar() {
  return (
    <div className="header">
      <h1>Dev Tools</h1>
      <ul className="menu">
        {links.map(({ linkName }) => (
          <li>
            <Link href={''}>{linkName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
