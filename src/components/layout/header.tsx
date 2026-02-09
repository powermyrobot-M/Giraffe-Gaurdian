'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/internships', label: 'Internships' },
  { href: '/events', label: 'Events' },
  { href: '/donate', label: 'Donate' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              Giraffe Guardians
            </span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
             <Button asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden"
              size="icon"
              aria-label="Toggle Menu"
            >
              <Menu className={cn('h-6 w-6', { hidden: isOpen })} />
              <X className={cn('h-6 w-6', { hidden: !isOpen })} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className='w-[240px]'>
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Heart className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">
                    Giraffe Guardians
                  </span>
              </Link>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild onClick={() => setIsOpen(false)} className='mt-4'>
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
