import Link from 'next/link';

const routes = [
  {
    title: 'Inicio',
    slug: '/',
    ariaLabel: 'Volver al inicio'
  },
  {
    title: 'Servicios',
    slug: '/servicios/',
    ariaLabel: 'Ver servicios'
  },
  {
    title: 'Quienes Somos',
    slug: '/quienes-somos/',
    ariaLabel: 'Aprender más del proyecto'
  },
  {
    title: 'Contacto',
    slug: '/contacto/',
    ariaLabel: 'Ver como contactar'
  }
];

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full pt-6">
    {routes.map((route, i) => {
      return (
        <Link href={route.slug} key={route.slug}>
          <a
            onClick={closeMenu}
            alt={route.ariaLabel}
            title={route.ariaLabel}
            aria-label={route.ariaLabel}
          >
            {route.title}
          </a>
        </Link>
      );
    })}
  </nav>
);

export default Navigation;
