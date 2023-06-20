import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex justify-between p-4 sticky top-0 z-50 bg-white">
      <div>
        LOGO
      </div>
      <ul className="flex justify-between space-x-6 uppercase">
        <li><Link href="/matcha-cold-whisk"><div>Matcha Cold Whisk</div></Link></li>
        <li><Link href="/coffee-tea"><div>Coffee & Tea</div></Link></li>
        <li><Link href="/matcha-fruity"><div>Matcha x Fruity</div></Link></li>
        <li><Link href="/soda-cans"><div>Soda Cans</div></Link></li>
        <li><Link href="/cookies"><div>Cookies</div></Link></li>
      </ul>
    </div>
  );
}
