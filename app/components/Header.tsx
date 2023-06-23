import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex justify-between p-4 sticky top-0 z-50 bg-white">
      <div>
        <img src="https://res.cloudinary.com/maysunktong/image/upload/v1687296535/Minimalist_Word_Mark_Badge_Typographic_Logo_bufywe.png" alt="matcha logo" className='w-20' />
      </div>
      <ul className="flex justify-between items-center space-x-6 uppercase">
        <li><Link href="/matcha-cold-whisk"><div>Matcha Cold Whisk</div></Link></li>
        <li><Link href="/coffee-tea"><div>Coffee & Tea</div></Link></li>
        <li><Link href="/matcha-fruity"><div>Matcha x Fruity</div></Link></li>
        <li><Link href="/soda-cans"><div>Soda Cans</div></Link></li>
        <li><Link href="/cookies"><div>Cookies</div></Link></li>
      </ul>
    </div>
  );
}
