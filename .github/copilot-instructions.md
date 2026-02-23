# Copilot Instructions for NEXLYN v2

## Project Overview

NEXLYN v2 is a modern web application for Nexlyn, a premier MikroTik® Master Distributor based in Dubai, serving the Middle East and Africa. The application features:

- Product catalog for MikroTik hardware (routers, switches, wireless equipment, IoT devices)
- AI-powered technical assistant using Google Gemini API
- Admin panel for product and content management
- WhatsApp integration for B2B quotes
- Responsive UI with light/dark theme support

## Tech Stack

- **Frontend Framework**: React 19.2.3
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **AI Integration**: Google Gemini API (@google/genai 1.37.0)
- **Charts**: Recharts 3.6.0
- **State Management**: React hooks with localStorage persistence

## Project Structure

```
/
├── .github/              # GitHub configuration and Copilot instructions
├── services/
│   └── geminiService.ts  # Google Gemini API integration
├── App.tsx               # Main application component
├── constants.tsx         # Product catalog, icons, and configuration
├── types.ts              # TypeScript type definitions
├── index.tsx             # Application entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## Key Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Environment Setup
- Set `GEMINI_API_KEY` in `.env.local` file for AI features
- API key should be obtained from Google AI Studio

## Code Style and Best Practices

### TypeScript Guidelines
- Always use TypeScript for all `.ts` and `.tsx` files
- Define proper interfaces in `types.ts` for data structures
- Use type annotations for function parameters and return types
- Prefer interfaces over types for object shapes

### React Guidelines
- Use functional components with React hooks
- Use `React.FC` type for components
- Follow existing state management patterns using `useState`, `useEffect`, `useMemo`, `useRef`
- Persist user data to `localStorage` with appropriate keys (prefix: `nexlyn_`)
- Handle theme state properly (light/dark mode)

### Component Structure
- Keep components focused and single-purpose
- Use TypeScript enums or union types for strict value sets (e.g., `ViewType`, `ThemeType`)
- Follow the existing pattern for state initialization from localStorage

### AI Service Integration
- Use the `GeminiService` class in `services/geminiService.ts` for AI interactions
- Always use streaming responses for better UX (`streamTech` method)
- Include proper error handling for API calls
- Respect the system instruction persona defined in `SYSTEM_INSTRUCTION`

### Code Examples

**Good: TypeScript interface definition**
```typescript
export interface Product {
  id: string;
  name: string;
  category: 'Wireless' | 'Switching' | 'Routing' | '5G/LTE' | 'IoT' | 'Accessories';
  status: 'In Stock' | 'Low Stock' | 'Backorder';
}
```

**Good: React component with proper typing**
```typescript
const MyComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return <div>{count}</div>;
};
```

**Good: localStorage persistence**
```typescript
const [theme, setTheme] = useState<ThemeType>(() => {
  const saved = localStorage.getItem('nexlyn_theme');
  return (saved as ThemeType) || 'dark';
});

useEffect(() => {
  localStorage.setItem('nexlyn_theme', theme);
}, [theme]);
```

## Boundaries and Prohibited Actions

### DO NOT:
- Remove or modify the MikroTik® branding or trademarks
- Commit API keys or secrets to the repository
- Modify the Gemini system instruction without explicit request
- Remove existing product data or admin features
- Break localStorage persistence mechanisms
- Remove WhatsApp integration functionality
- Change the admin passcode mechanism without authorization

### DO:
- Follow existing code patterns and conventions
- Add proper TypeScript types for new features
- Maintain backward compatibility with localStorage data
- Test AI features with appropriate API key setup
- Keep the UI responsive and accessible
- Preserve the existing theme system (light/dark)
- Document significant changes in code comments when necessary

## Testing and Validation

- Test the development server with `npm run dev`
- Verify production builds with `npm run build && npm run preview`
- Check TypeScript compilation errors before committing
- Test both light and dark themes
- Validate localStorage data persistence across page reloads
- Test AI features with a valid Gemini API key in `.env.local`

## Special Notes

- This is a B2B application focused on MikroTik hardware distribution
- The AI assistant ("Grid Expert") provides technical support for networking equipment
- Product data is stored in `constants.tsx` and can be managed via the admin panel
- Admin panel access requires the passcode defined in `ADMIN_PASSCODE`
- All customer-facing text should maintain a professional, technical tone
- Pricing discussions should direct users to WhatsApp or B2B quote buttons

## External Resources

- MikroTik Official Documentation: https://help.mikrotik.com/
- Google Gemini API Documentation: https://ai.google.dev/
- React Documentation: https://react.dev/
- Vite Documentation: https://vitejs.dev/
- TypeScript Documentation: https://www.typescriptlang.org/

## Agent Responsibilities

When working on this repository:
1. **Understand the context**: Review related files before making changes
2. **Minimal changes**: Make surgical, targeted modifications
3. **Type safety**: Ensure all TypeScript types are properly defined
4. **Test thoroughly**: Run dev server and verify changes work as expected
5. **Preserve data**: Never remove or corrupt localStorage-persisted data
6. **Follow patterns**: Maintain consistency with existing code structure
7. **Document when needed**: Add comments for complex business logic
