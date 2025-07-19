"use client";

import { useState, useEffect, type ComponentProps } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Tooth } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#contact', label: 'Contact' },
];

function NavLink({ href, children, className, onClick }: { href: string; children: React.ReactNode, className?: string; onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Adjusted for sticky header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={cn('transition-colors hover:text-primary', className)}>
      {children}
    </a>
  );
}


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center gap-2">
            <Tooth className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline text-gray-800">Smile<span className="text-primary/90">AI</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} className="text-base font-medium text-gray-600">{link.label}</NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <NavLink href="#contact">
              <Button>Book Appointment</Button>
            </NavLink>
          </div>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 pt-10">
                  {navLinks.map(link => (
                     <SheetClose key={link.href} asChild>
                        <NavLink href={link.href} onClick={() => setOpen(false)} className="text-xl font-medium text-gray-600">{link.label}</NavLink>
                     </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <NavLink href="#contact" onClick={() => setOpen(false)}>
                        <Button className='w-full mt-4'>Book Appointment</Button>
                    </NavLink>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
