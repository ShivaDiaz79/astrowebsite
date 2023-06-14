import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg mb-4 md:mb-0">Mi sitio web</div>
          <div className="flex items-center">
            
            <Link href="/"
              className="mr-4 hover:text-gray-300">Inicio
            </Link>
            <Link href="/acerca"
              className="mr-4 hover:text-gray-300">Acerca de
            </Link>
            <Link href="/contacto"
              className="hover:text-gray-300">Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
