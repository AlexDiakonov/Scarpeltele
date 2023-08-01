import { urlFor } from '../lib/client';
import Image from 'next/image';

const UrlImage = ({ src, alt, className }) => {
  const myUrl = urlFor(src);
  return <Image className={className} src={myUrl} alt={alt} />;
};

export default UrlImage;
