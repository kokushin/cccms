import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

interface MobileNavProps {
  navigation: NavItem[];
  currentPath?: string;
}

export default function MobileNav({ navigation, currentPath = '/' }: MobileNavProps) {
  const navItems = navigation.map(item => ({
    ...item,
    current: currentPath.startsWith(item.href) || currentPath === item.href
  }));

  return (
    <Disclosure as="nav" className="mobile-nav">
      {({ open }) => (
        <>
          <div className="nav-container">
            <div className="nav-content">
              <div className="nav-left">
                <a href="/cccms/" className="logo">
                  My Blog
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="nav-desktop">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={item.current ? 'nav-link active' : 'nav-link'}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="nav-mobile-button">
                <Disclosure.Button className="menu-button">
                  <span className="sr-only">メニューを開く</span>
                  {open ? (
                    <XMarkIcon className="icon" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="icon" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="mobile-panel">
            <div className="mobile-menu">
              {navItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={item.current ? 'mobile-link active' : 'mobile-link'}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
