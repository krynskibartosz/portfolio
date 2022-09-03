import { Row, Link, ClickOutside } from 'components';

import { TranslationIcon } from 'components/base/Icons/Translation';
import { HTMLAttributes, useEffect, useState } from 'react';

import { useRouter } from 'next/dist/client/router';
import { links, toggleTheme } from './utils';
import { Form } from 'components/forms/Form';
import { Radio } from 'components/forms/inputs/Radio';
import { NativeSelect } from 'components/forms/NativeSelect';
import { useMediaQuery } from 'hooks';
import { Tooltip } from 'components/base/Tooltip';
import { i18n, useTranslation } from 'next-i18next';

export const NavBar = () => {
  const { t } = useTranslation('');
  const windows = typeof window !== 'undefined';
  const dark = windows && localStorage.theme === 'dark';

  const lng = [
    {
      label: 'Fr',
      value: 'fr',
    },
    {
      label: 'En',
      value: 'en',
    },

    {
      label: 'Pl',
      value: 'pl',
    },
  ];
  const lngLong = [
    {
      label: t('French'),
      value: 'fr',
    },
    {
      label: t('English'),
      value: 'en',
    },

    {
      label: t('Polish'),
      value: 'pl',
    },
  ];

  const { pathname } = useRouter();
  const { maxMd } = useMediaQuery();

  const [isNavHover, setNavHover] = useState(false);

  const { locale } = useRouter();

  const [open, setOpen] = useState(false);

  const [animationConfig, setAnimationConfig] = useState([
    { name: 'home', isHovered: false, style: {} },
    { name: 'projects', isHovered: false, style: {} },
    { name: 'contact', isHovered: false, style: {} },
    { name: 'theme', isHovered: false, style: {} },
    { name: 'language', isHovered: false, style: {} },
  ]);
  const isAtLeastOnElementHovered = animationConfig.some(
    (el) => el.isHovered === true
  );

  useEffect(() => {
    const copy = [...animationConfig];
    copy.forEach((el) => {
      el.isHovered = false;
    });
    setAnimationConfig(copy);
    setNavHover(false);
  }, [pathname]);

  //  hover animation managment
  useEffect(() => {
    if (isAtLeastOnElementHovered) {
      setNavHover(true);
    }
    let notHovered = [...animationConfig].filter((el) => !el.isHovered);
    let hovered = [...animationConfig].filter((el) => el.isHovered);

    notHovered.forEach((element) => {
      element.style = {
        transform: 'scale(1.2) translateY(-10px)',
      };
      // style right buttons
      if (element.name === 'theme') {
        element.style = {
          marginRight: '20px',
          transform: 'scale(1.2) translateY(-10px)',
        };
      }
      if (element.name === 'contact') {
        element.style = {
          marginRight: '20px',
          transform: 'scale(1.2) translateY(-10px)',
        };
      }
    });
  }, [animationConfig]);

  const router = useRouter();
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <>
      <nav
        className="fixed w-full bottom-5 max-md:bottom-3"
        style={{ zIndex: 999 }}
      >
        <Row className="max-w-3xl mx-auto max-md:mp-5" positionX="center">
          <Row
            positionX="center"
            positionY="center"
            onMouseEnter={() => setNavHover(true)}
            onMouseLeave={() => setNavHover(false)}
            className="py-2 duration-500 ease-in-out bg-white border border-gray-100 dark:bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl dark:border-gray-900 max-md:py-0 max-md:px-0 gap-x-2 max-md:border-none max-md:bg-none max-md:backdrop-blur-0 max-md:bg-opacity-0 dark:max-md:bg-transparent"
            style={{
              width: !maxMd && isNavHover ? 450 : 360,
              transitionProperty: 'width',
            }}
          >
            {links(t).map((el, i) => {
              const copy = [...animationConfig];
              const isActive = pathname === `/${el.url}`;
              return (
                <div
                  key={`tooltip-${i}`}
                  className="relative h-full has-tooltip min-w-min group"
                >
                  {/* <div className="absolute w-full bg-red-500 -top-full">
                    <p className="text-xs text-center">Home</p>
                  </div> */}
                  <Tooltip className="max-md:hidden" position="top">
                    {el.label}
                  </Tooltip>
                  <Link key={i} href={`/${el.url}`}>
                    <Card
                      onMouseEnter={() => {
                        if (maxMd) return;
                        copy[i].isHovered = true;
                        copy[i].style = {
                          transform: 'scale(1.3) translateY(-10px)',
                          margin: '0 20px',
                          zIndex: 28,
                        };

                        setAnimationConfig(copy);
                      }}
                      onClick={() => {
                        if (maxMd) return;
                        setAnimationConfig(copy);
                      }}
                      onMouseLeave={() => {
                        if (maxMd) return;
                        copy[i].isHovered = false;
                        if (isNavHover) {
                          copy[i].style = {
                            transform: 'scale(1.2) translateY(-10px)',
                          };
                        } else {
                          copy[i].style = {
                            transform: 'scale(1) translateY(-10px)',
                          };
                        }
                        setAnimationConfig(copy);
                      }}
                      style={
                        isNavHover && isAtLeastOnElementHovered
                          ? {
                              ...animationConfig[i]?.style,
                              transitionProperty: 'transform, margin',
                            }
                          : {}
                      }
                      className={`${
                        isActive
                          ? 'bg-gray-700  dark:bg-gray-200'
                          : 'bg-gradient-to-br max-md:border border-white dark:border-none from-gray-50 to-gray-100 dark:from-[#1c1c1c] dark:to-[#1c1c1c]'
                      } ${el.value === 'projects' ? 'z-50' : ''}`}
                    >
                      <div>
                        <el.Icon />
                      </div>
                    </Card>
                  </Link>
                </div>
              );
            })}
            <Row className="gap-x-2">
              <div
                className={`pl-2 border-l relative has-tooltip border-gray-100 max-md:border-gray-200 dark:border-[#1c1c1c]  ${
                  isAtLeastOnElementHovered ? 'border-none' : ''
                }`}
              >
                <Tooltip className="max-md:hidden ml-1 " position="top">
                  {dark ? 'Clair' : 'Sombre'}
                </Tooltip>
                <Card
                  onClick={() => {
                    toggleTheme();
                    if (maxMd) return;
                    const copy = [...animationConfig];
                    copy.forEach((el) => {
                      el.isHovered = false;
                    });
                    setAnimationConfig(copy);
                    setNavHover(false);
                  }}
                  onMouseEnter={() => {
                    if (maxMd) return;
                    const copy = [...animationConfig];

                    copy[3].isHovered = true;
                    copy[3].style = {
                      transform: 'scale(1.3) translateY(-10px)',
                      margin: '0 20px',
                      zIndex: 28,
                    };
                    setAnimationConfig(copy);
                  }}
                  onMouseLeave={() => {
                    if (maxMd) return;
                    const copy = [...animationConfig];
                    copy[3].isHovered = false;
                    if (isNavHover) {
                      copy[3].style = {
                        transform: 'scale(1.2) translateY(-10px)',
                      };
                    } else {
                      copy[3].style = { transform: 'scale(1)' };
                    }
                    setAnimationConfig(copy);
                  }}
                  style={
                    isNavHover && isAtLeastOnElementHovered
                      ? animationConfig[3]?.style
                      : {}
                  }
                  className={`bg-gradient-to-br border-white max-md:border dark:border-none dark:from-[#1c1c1c] dark:to-[#1c1c1c] relative from-gray-50 to-gray-200`}
                >
                  <ThemeIcon />
                </Card>
              </div>

              <ClickOutside onClick={() => setOpen(false)}>
                <div className="relative">
                  <Card
                    onMouseEnter={() => {
                      const copy = [...animationConfig];
                      copy[4].isHovered = true;
                      copy[4].style = {
                        transform: 'scale(1.3) translateY(-10px)',
                        zIndex: 28,
                      };
                      setAnimationConfig(copy);
                    }}
                    onMouseLeave={() => {
                      const copy = [...animationConfig];
                      copy[4].isHovered = false;
                      if (isNavHover) {
                        copy[4].style = {
                          transform: 'scale(1.2) translateY(-10px)',
                        };
                      } else {
                        copy[4].style = { transform: 'scale(1)' };
                      }
                      setAnimationConfig(copy);
                    }}
                    style={
                      isNavHover && isAtLeastOnElementHovered
                        ? animationConfig[4]?.style
                        : {}
                    }
                    onClick={() => {
                      const copy = [...animationConfig];
                      copy.forEach((el) => {
                        el.isHovered = false;
                      });
                      setAnimationConfig(copy);
                      setNavHover(false);
                      setOpen(!open);
                    }}
                    className={`bg-gradient-to-br max-md:border border-white dark:border-none dark:from-[#1c1c1c] dark:to-[#1c1c1c]  relative from-gray-50 to-gray-200`}
                  >
                    {open && (
                      <div
                        className={`absolute max-md:hidden flex flex-col w-full gap-5 p-2 duration-500 ease-in-out transition-transform  bg-white border border-gray-100 min-w-min dark:bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl max-md:py-0 max-md:px-0 gap-x-2 max-md:border-none dark:border-none -top-[90px] ${
                          isNavHover && isAtLeastOnElementHovered
                            ? 'scale-[0.60]'
                            : 'scale-[0.80]'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const copy = [...animationConfig];
                          copy.forEach((el) => {
                            el.isHovered = false;
                          });
                          setAnimationConfig(copy);
                          setNavHover(false);
                        }}
                      >
                        <Form
                          submit={() => null}
                          initialBody={{ lng: locale }}
                          name="lng"
                          id="lng"
                          form="lng"
                          children={({ inputProps, body }) => (
                            <div>
                              <Radio
                                {...inputProps('lng')}
                                onChange={() => {
                                  setNavHover(false);
                                  // changeLanguage(body.lng);
                                  router.push(router.asPath, undefined, {
                                    locale: body.lng,
                                  });
                                  persistLocaleCookie(body.lng);
                                  // i18n.changeLanguage(body.lng);
                                  // onToggleLanguageClick(body.lng);
                                  setOpen(false);
                                }}
                                options={lng}
                              />
                            </div>
                          )}
                        />
                      </div>
                    )}
                    <Form
                      submit={() => null}
                      initialBody={{ lng: locale }}
                      name="lng"
                      id="lng"
                      form="lng"
                      className="absolute top-0 h-full md:hidden"
                      children={({ inputProps, body }) => (
                        <Row
                          positionX="center"
                          positionY="center"
                          className="relative h-full"
                        >
                          <NativeSelect
                            id="lng"
                            options={lngLong}
                            onChange={() => {
                              setNavHover(false);
                              // changeLanguage(body.lng);
                              router.push(router.asPath, undefined, {
                                locale: body.lng,
                              });
                              persistLocaleCookie(body.lng);
                              // onToggleLanguageClick(body.lng);
                            }}
                            {...inputProps('lng')}
                          />
                          <TranslationIcon />
                        </Row>
                      )}
                    />
                    <TranslationIcon className="max-md:hidden" />
                  </Card>
                </div>
              </ClickOutside>
            </Row>
          </Row>
        </Row>
      </nav>
    </>
  );
};

const Card = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...rest}
    className={`grid w-14 h-14 transition-all  duration-500 ease-in-out  cursor-pointer  place-items-center max-md:!transform-none max-md:!margin-0   rounded-xl ${className}`}
  >
    {children}
  </div>
);

const persistLocaleCookie = (language: string) => {
  const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };
  const newDate = new Intl.DateTimeFormat('sv-SE', options).format(date);
  document.cookie = `NEXT_LOCALE=${language};expires=${newDate};path=/`;
};

const ThemeIcon = () => (
  <div className="dark:relative theme-toggle theme-toggle-js isolate">
    <span className="moon "></span>
    <span className="sun"></span>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
  </div>
);
