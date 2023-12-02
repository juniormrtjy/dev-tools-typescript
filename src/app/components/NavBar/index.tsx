import Link from 'next/link'
import './style.scss'

export const links = [
  { linkName: 'Inspiration', key: 'inspiration' },
  { linkName: 'Colors', key: 'colors' },
  { linkName: 'Master', key: 'master' },
  { linkName: 'HTML5', key: 'html5' },
  { linkName: 'Fonts', key: 'fonts' },
  { linkName: 'Images', key: 'images' },
  { linkName: 'Icons', key: 'icons' },
  { linkName: 'Templates', key: 'templates' },
  { linkName: 'Challenges', key: 'challenges' },
  { linkName: 'Others', key: 'others' }
]

export default function NavBar() {
  return (
    <div className="header">
      <h1>Dev Tools</h1>
      <ul className="menu">
        {links.map(({ linkName, key }) => (
          <li key={key}>
            <Link href={''}>{linkName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
