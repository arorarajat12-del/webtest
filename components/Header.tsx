'use client';
import Button from './ui/Button';

const links = [{href:'#services',label:'Services'},{href:'#process',label:'Process'},{href:'#proof',label:'Proof'},{href:'#about',label:'About'}];
export default function Header(){return <header className="sticky top-0 z-50 border-b border-border/80 bg-cream/90 backdrop-blur"><div className="mx-auto flex max-w-container items-center justify-between px-5 py-4 md:px-8 lg:px-12"><a href="#" className="font-heading text-2xl text-evergreen">Tinyvat<span className="relative">i<span className="absolute -top-2 left-1 h-1.5 w-1.5 rounded-full bg-amber"></span></span>on.</a><nav className="hidden items-center gap-7 md:flex">{links.map(l=><a key={l.href} href={l.href} className="text-sm text-ink hover:text-evergreen">{l.label}</a>)}<Button href="#contact">Request an Audit</Button></nav><a href="#contact" className="md:hidden text-sm text-evergreen">Request an Audit</a></div></header>}
