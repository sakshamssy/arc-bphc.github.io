import NextLink from 'next/link';

import Showcase from 'components/common/Showcase';

// Fill this up with contentlayer bs
const featured = [
  {
    name: 'Aditya Chopra',
    image: 'https://arc-bphc.github.io/assets/img/members/Aditya%20Chopra.jpg',
    website: 'https://adeecc.vercel.app',
    linkedin: 'https://adeecc.vercel.app',
    email: 'https://adeecc.vercel.app',
    github: 'https://adeecc.vercel.app'
  },
  {
    name: 'Arjun Prasad',
    image: 'https://arc-bphc.github.io/assets/img/members/Arjun%20Prasad.jpg',
    website: 'https://adeecc.vercel.app',
    linkedin: 'https://adeecc.vercel.app',
    email: 'https://adeecc.vercel.app',
    github: 'https://adeecc.vercel.app'
  },
  {
    name: 'Aditya Chopra',
    image: 'https://arc-bphc.github.io/assets/img/members/Aditya%20Chopra.jpg',
    website: 'https://adeecc.vercel.app',
    linkedin: 'https://adeecc.vercel.app',
    email: 'https://adeecc.vercel.app',
    github: 'https://adeecc.vercel.app'
  },
  {
    name: 'Aditya Chopra',
    image: 'https://arc-bphc.github.io/assets/img/members/Aditya%20Chopra.jpg',
    website: 'https://adeecc.vercel.app',
    linkedin: 'https://adeecc.vercel.app',
    email: 'https://adeecc.vercel.app',
    github: 'https://adeecc.vercel.app'
  }
];

const FeaturedDude = ({ deets }) => {
  return (
    <div className='col-span-1 flex flex-col gap-y-6 mb-8'>
      <div className='rounded-xl overflow-hidden h-[12em]'>
        <img src={deets.image} alt={deets.name} className='object-fill' />
      </div>
      <div className='flex flex-col gap-y-2'>
        <h4 className='font-semibold'>{deets.name}</h4>
        <div className='flex flex-row gap-x-2'>
          {deets.website && (
            <NextLink href={deets.website}>
              <a className='h-3 w-3'>
                <WebsiteIcon />
              </a>
            </NextLink>
          )}
          {deets.linkedin && (
            <NextLink href={deets.linkedin}>
              <a className='h-3 w-3'>
                <LinkedinIcon />
              </a>
            </NextLink>
          )}
          {deets.email && (
            <NextLink href={deets.email}>
              <a className='h-3 w-3'>
                <EmailIcon />
              </a>
            </NextLink>
          )}
          {deets.github && (
            <NextLink href={deets.github}>
              <a className='h-3 w-3'>
                <GithubIcon />
              </a>
            </NextLink>
          )}
        </div>
      </div>
    </div>
  );
};

const Spotlight = () => {
  return (
    <div className='mt-24'>
      <h2 className='text-3xl font-semibold'>Members Spotlight</h2>
      <div className='mt-4 border-l-4 border-rose-300 pl-4 text-gray-500'>
        View 3 random members of the club at every refresh!
      </div>
      <Showcase
        Component={FeaturedDude}
        items={featured}
        max={3}
        linkToAll='/about'
      />
    </div>
  );
};

export default Spotlight;

function WebsiteIcon(props) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='link'
      className='svg-inline--fa fa-link fa-w-16'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z'
      ></path>
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='linkedin'
      className='svg-inline--fa fa-linkedin fa-w-14'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
      ></path>
    </svg>
  );
}

function EmailIcon(props) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='envelope'
      className='svg-inline--fa fa-envelope fa-w-16'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
      ></path>
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='github'
      className='svg-inline--fa fa-github fa-w-16'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 496 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
      ></path>
    </svg>
  );
}
