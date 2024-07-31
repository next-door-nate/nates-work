import '../styles/remedy.css';
import '../styles/variables.scss';
import '../styles/typography.scss';
import '../styles/main.scss';

export const metadata = {
  title: 'HTML Tag Guessing Game',
  description: 'There are {htmlTags.length + 1} html tags. How many can you name from memory?',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wdth,wght@87.5,100..900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wdth,wght@0,90,640;0,90,900;0,100,400;0,100,520;1,90,640;1,100,400;1,100,520&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
