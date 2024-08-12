import Link from 'next/link';
import React from 'react'
import { IconBase } from 'react-icons';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiX } from "react-icons/si";



export default function Navbar() {

  const socials = [
    {
      name: "Github",
      link: "https://github.com/ChristianGallegos7",
      icon: SiGithub
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/christian-gallegos-b5663822a/",
      icon: SiLinkedin
    },
    {
      name: "X",
      link: "https://www.linkedin.com/in/christian-gallegos-b5663822a/",
      icon: SiX
    }
  ]

  return (
    <nav className='py-10 flex justify-between'>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Christian</h1>
      <div>
        {
          socials.map((social, index) => {
            const Icon = social.icon
            return <Link href={social.link} key={index} aria-label={social.name}>
              <Icon />
            </Link>
          })
        }
      </div>
    </nav>
  )
}
