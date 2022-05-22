import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';
import { getGlobalData } from '../../utils/global-data';
import Header from './Header';
import SEO from './SEO';
import Footer from './Footer';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children, globalData }) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <section className='flex flex-col'>
      <SEO title={globalData.name} description={globalData.blogTitle} />     
      <Header name={globalData.name} />
      <div className="pb-24 pt-12 overflow-hidden"> 
        <div className="flex flex-col items-center lg:px-12 px-8 w-full mx-auto">
          <main className="w-full">
            {children}
          </main>
        </div>
      </div>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed w-screen lg:w1/2 top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute w-screen lg:w-1/2 bottom-0 opacity-20 dark:opacity-10"
      />
    </section>
  );
}
export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}