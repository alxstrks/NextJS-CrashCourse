import Link from 'next/link'
import Image from 'next/image'
import Logo from './temp.PNG'

export default function Navbar() {
  return (
    <nav>
        <Image
            src={Logo}
            alt='Helpdesk logo'
            width={70}
            quality={100}
        />
        <h1>Helpdesk</h1>
        <Link href="/">Dashoard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
