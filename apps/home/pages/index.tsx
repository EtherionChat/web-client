import Image from 'next/image';
import styles from './index.module.scss';
import HeaderAction from '../app/header/header';
import { FooterLinks } from '../app/footer/footer';
import { HeroBullets } from '../app/hero/hero';
import { CreditCardForm } from '@root/ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <CreditCardForm />
      <HeaderAction links={[
        {
          "link": "/about",
          "label": "Features"
        },
        {
          "link": "#1",
          "label": "Learn",
          "links": [
            {
              "link": "/docs",
              "label": "Documentation"
            },
            {
              "link": "/resources",
              "label": "Resources"
            },
            {
              "link": "/community",
              "label": "Community"
            },
            {
              "link": "/blog",
              "label": "Blog"
            }
          ]
        },
        {
          "link": "/about",
          "label": "About"
        },
        {
          "link": "/pricing",
          "label": "Pricing"
        },
        {
          "link": "#2",
          "label": "Support",
          "links": [
            {
              "link": "/faq",
              "label": "FAQ"
            },
            {
              "link": "/demo",
              "label": "Book a demo"
            },
            {
              "link": "/forums",
              "label": "Forums"
            }
          ]
        }
      ]} />
      <HeroBullets />
      <FooterLinks data={
        [
          {
            "title": "About",
            "links": [
              {
                "label": "Features",
                "link": "#"
              },
              {
                "label": "Pricing",
                "link": "#"
              },
              {
                "label": "Support",
                "link": "#"
              },
              {
                "label": "Forums",
                "link": "#"
              }
            ]
          },
          {
            "title": "Project",
            "links": [
              {
                "label": "Contribute",
                "link": "#"
              },
              {
                "label": "Media assets",
                "link": "#"
              },
              {
                "label": "Changelog",
                "link": "#"
              },
              {
                "label": "Releases",
                "link": "#"
              }
            ]
          },
          {
            "title": "Community",
            "links": [
              {
                "label": "Join Discord",
                "link": "#"
              },
              {
                "label": "Follow on Twitter",
                "link": "#"
              },
              {
                "label": "Email newsletter",
                "link": "#"
              },
              {
                "label": "GitHub discussions",
                "link": "#"
              }
            ]
          }
        ]
      } />
    </div>
  );
}

export default Index;
