import Link from 'next/link';

export const SmartLink = (link, url) => {
  const regEx = /^http/;

  return regEx.test(url) ? (
    <Link href={url}>{link}</Link>
  ) : (
    <a href={url}>{link}</a>
  );
};
