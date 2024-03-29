import { HomeIcon } from '../base/Icons/Home';
import { FolderIcon } from '../base/Icons/Folder';
import { ContactIcon } from '../base/Icons/Contact';

export const links = (translation: (e?: any) => string) => [
  {
    label: translation('Home'),
    value: 'home',
    url: '',
    Icon: HomeIcon,
  },
  {
    label: translation('Projects'),
    value: 'projects',
    url: 'projects',
    Icon: FolderIcon,
  },
  {
    label: translation('Contact'),
    value: 'contact',
    url: 'contact',
    Icon: ContactIcon,
  },
];

export const toggleTheme = () => {
  const dark = localStorage.theme === 'dark';
  const system = localStorage.theme === 'system';
  if (system) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
  if (dark) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
};
