import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center">
      <span className="font-bold text-lg">Portfolio</span>
      <ul className="flex gap-6 text-sm">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                isActive ? 'opacity-100 font-semibold' : 'opacity-50 hover:opacity-100 transition-opacity'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar