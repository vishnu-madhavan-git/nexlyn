
import React from 'react';
import { Product, Category, HeroSlide } from './types';
import mikrotikProducts from './mikrotik-products.json';

export const COLORS = {
  primary: '#E60026',
  accent: '#FFD700',
  dark: '#0A0A0A',
};

// Abstract Hardware Visuals (SVG Data URLs)
export const VISUALS = {
  ROUTING: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZ3JhZDEpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMSIgeDE9IjAiIHkxPSIwIiB4Mj0iODAwIiB5Mj0iODAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzE0MDAwNSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAzMDMwMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMDAgMzAwSDcwME0xMDAgNTAwSDcwME0zMDAgMTAwVjcwME01MDAgMTAwVjcwMCIgc3Ryb2tlPSIjRTYwMDI2IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjxyZWN0IHg9IjIwMCIgeT0iMzUwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjEwMCIgcng9IjQiIGZpbGw9IiNFMzAwMjYiIGZpbGwtb3BhY2l0eT0iMC4wNSIgc3Ryb2tlPSIjRTYwMDI2IiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIyNDAiIGN5PSI0MDAiIHI9IjUiIGZpbGw9IiNFMzAwMjYiLz48Y2lyY2xlIGN4PSIyNzAiIGN5PSI0MDAiIHI9IjUiIGZpbGw9IiNFMzAwMjYiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSI0MDAiIHI9IjUiIGZpbGw9IiNFMzAwMjYiLz48L3N2Zz4=',
  SWITCHING: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZ3JhZDIpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMiIgeDE9IjgwMCIgeTE9IjgwMCIgeDI9IjAiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0U2MDAyNiIgc3RvcC1vcGFjaXR5PSIwLjE1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDMwMzAzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMTUwIiB5PSIyMDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiByeD0iOCIgc3Ryb2tlPSIjRTYwMDI2IiBzdHJva2Utd2lkdGg9IjAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48cGF0aCBkPSJNMTgwIDI0MEg2MjBNMTgwIDI4MEg2MjBNMTgwIDMyMEg2MjBNMTgwIDM2MEg2MjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9zdmc+',
  WIRELESS: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiMwMzAzMDMiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSI0MDAiIHI9IjMwMCIgc3Ryb2tlPSIjRTYwMDI2IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSI0MDAiIHI9IjIwMCIgc3Ryb2tlPSIjRTYwMDI2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSI0MDAiIHI9IjEwMCIgc3Ryb2tlPSIjRTYwMDI2IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1vcGFjaXR5PSIwLjQiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSI0MDAiIHI9IjEwIiBmaWxsPSIjRTYwMDI2Ii8+PC9zdmc+',
  LTE: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZ3JhZDMpIi8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkMyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj48c3RvcCBzdG9wLWNvbG9yPSIjRTYwMDI2IiBzdHJva2Utd2lkdGg9IjAuMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAzMDMwMyIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik00MDAgMTAwTDQwMCA3MDBNNDAwIDEwMEwzNTAgMTUwTTQwMCAxMDBMNDUwIDE1MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2Utb3BhY2l0eT0iMC44Ii8+PC9zdmc+',
  ACCESSORIES: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiMwYjBiMGIiLz48cmVjdCB4PSIzMDAiIHk9IjMwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz48L3N2Zz4='
};

export const ICONS = {
  Globe: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>,
  Search: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  Grid: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>,
  ChevronRight: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>,
  WhatsApp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.498 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.1-.47-.15-.667.15-.198.3-.765.971-.937 1.171-.173.199-.346.225-.646.075-.3-.15-1.268-.467-2.414-1.49-.89-.794-1.492-1.775-1.666-2.076-.174-.3-.019-.463.13-.612.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.199.05-.374-.025-.525-.075-.15-.667-1.608-.913-2.198-.24-.576-.484-.497-.667-.506-.172-.007-.37-.009-.567-.009-.197 0-.518.074-.789.373-.27.299-1.033 1.009-1.033 2.459 0 1.45 1.054 2.85 1.202 3.05.148.2 2.074 3.167 5.023 4.444.7.304 1.247.485 1.673.621.705.223 1.344.192 1.85.117.564-.083 1.767-.722 2.016-1.417.248-.695.248-1.291.173-1.416-.075-.125-.272-.199-.57-.35z"/>
      <path d="M21 11.5a8.38 8.38 0 1 1-16.31 3.8L3 21l5.7-1.7A8.38 8.38 0 0 1 21 11.5z"/>
    </svg>
  ),
  Bolt: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  Shield: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Router: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/><path d="M14 18h.01"/><path d="M18 18h.01"/><path d="M2 14v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/><path d="M12 2v6"/></svg>,
  Wifi: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1"/></svg>,
};

// Import comprehensive MikroTik product database
export const PRODUCTS: Product[] = mikrotikProducts as Product[];

export const CATEGORIES: Category[] = [
  { name: 'All', id: 'all', count: 12, icon: 'Globe' },
  { name: 'Routing', id: 'routing', count: 3, icon: 'Router' },
  { name: 'Switching', id: 'switching', count: 3, icon: 'Grid' },
  { name: 'Wireless', id: 'wireless', count: 3, icon: 'Wifi' },
  { name: '5G/LTE', id: '5g', count: 2, icon: 'Bolt' },
  { name: 'Accessories', id: 'accessories', count: 1, icon: 'Shield' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'OFFICIAL MIKROTIK® MASTER DISTRIBUTOR.',
    subtitle: 'NEXLYN Distribution LLC: Your authorized source for genuine network infrastructure in the MENA region.',
    image: VISUALS.ROUTING,
    categoryId: 'Routing'
  },
  {
    title: 'ENTERPRISE-GRADE INFRASTRUCTURE.',
    subtitle: 'Deploy 100G carrier-grade hardware for data centers, ISPs, and large-scale enterprise environments.',
    image: VISUALS.SWITCHING,
    categoryId: 'Switching'
  },
  {
    title: 'B2B DISTRIBUTION EXCELLENCE.',
    subtitle: 'Tiered volume pricing and technical logistics for authorized resellers and system integrators.',
    image: VISUALS.WIRELESS,
    categoryId: 'Wireless'
  },
  {
    title: 'NEXT-GEN 5G CONNECTIVITY.',
    subtitle: 'High-speed LTE and 5G NR hardware for mission-critical mobile and remote networking deployments.',
    image: VISUALS.LTE,
    categoryId: '5G/LTE'
  },
  {
    title: 'PROFESSIONAL NETWORK ACCESSORIES.',
    subtitle: 'SFP+ modules, high-gain antennas, and specialized technical accessories for complete build-outs.',
    image: VISUALS.ACCESSORIES,
    categoryId: 'Accessories'
  }
];

export const WHATSAPP_NUMBER = '971502474482';
export const ADMIN_PASSCODE = '3210'; // Client access
export const OWNER_PASSCODE = '4560'; // Owner full access
