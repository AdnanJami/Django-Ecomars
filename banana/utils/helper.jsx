// utils/colors.js
export const COLORS = {
  // Primary Colors
  primary: '#6366F1',      // Indigo
  primaryDark: '#4F46E5',  // Darker indigo
  primaryLight: '#A5B4FC', // Light indigo
  
  // Secondary Colors
  secondary: '#F59E0B',    // Amber
  secondaryDark: '#D97706', // Dark amber
  secondaryLight: '#FDE68A', // Light amber
  
  // Neutral/Gray Scale
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  
  // Status Colors
  success: '#10B981',      // Green
  successLight: '#D1FAE5',
  error: '#EF4444',        // Red
  errorLight: '#FEE2E2',
  warning: '#F59E0B',      // Yellow
  warningLight: '#FEF3C7',
  info: '#3B82F6',         // Blue
  infoLight: '#DBEAFE',
  
  // Popular Modern Colors
  purple: '#8B5CF6',
  pink: '#EC4899',
  teal: '#14B8A6',
  cyan: '#06B6D4',
  emerald: '#059669',
  lime: '#65A30D',
  orange: '#EA580C',
  rose: '#E11D48',
  
  // Dark Theme
  dark: {
    background: '#0F172A',   // Slate 900
    surface: '#1E293B',     // Slate 800
    card: '#334155',        // Slate 700
    text: '#F1F5F9',        // Slate 100
    textSecondary: '#CBD5E1', // Slate 300
    border: '#475569',      // Slate 600
  },
  
  // Light Theme
  light: {
    background: '#FFFFFF',
    surface: '#F8FAFC',     // Slate 50
    card: '#FFFFFF',
    text: '#0F172A',        // Slate 900
    textSecondary: '#64748B', // Slate 500
    border: '#E2E8F0',      // Slate 200
  },
  
  // Transparent variants
  transparent: 'transparent',
  overlay: 'rgba(0, 0, 0, 0.5)',
  backdrop: 'rgba(0, 0, 0, 0.3)',
};

// Gradient combinations
export const GRADIENTS = {
  primary: ['#6366F1', '#8B5CF6'],
  sunset: ['#FF6B6B', '#FFE66D'],
  ocean: ['#06B6D4', '#3B82F6'],
  forest: ['#059669', '#65A30D'],
  purple: ['#8B5CF6', '#EC4899'],
  dark: ['#1F2937', '#374151'],
};

// Usage examples:
// backgroundColor: COLORS.primary
// color: COLORS.dark.text
// shadowColor: COLORS.overlay