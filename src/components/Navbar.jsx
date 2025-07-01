import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap"
const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                // Hear bottom top means that element is present at the bottom and camera angle is
                // at the top as it moves at the top it will animate. 
                start:'bottom top'
            }
        });
        // what will happen after animation will come..
        navTween.fromTo('nav',{backgroundColor:'transparent'},{
            backgroundColor:'#00000050',backgroundFilter:'blur(10px)',
            duration:1,
            ease:'power1.inOut'
        })

    })
  return (
    <nav>
        <div>
            <a href="#home" className='flex item-center gap-2'>
                <img src="/images/logo.png" alt="logo" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
 