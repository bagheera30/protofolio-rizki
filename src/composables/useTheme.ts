import { ref, watch, onMounted } from 'vue';

const themeColor = ref<string>('red');

const themes = {
  red: {
    primary: 'rgb(220, 38, 38)',
    primary_dark: 'rgb(127, 29, 29)',
    secondary: 'rgb(30, 58, 138)',
    accent: 'rgb(59, 130, 246)',
  },
  blue: {
    primary: 'rgb(59, 130, 246)',
    primary_dark: 'rgb(30, 58, 138)',
    secondary: 'rgb(15, 23, 42)',
    accent: 'rgb(139, 92, 246)',
  },
  purple: {
    primary: 'rgb(147, 51, 234)',
    primary_dark: 'rgb(88, 28, 135)',
    secondary: 'rgb(17, 24, 39)',
    accent: 'rgb(236, 72, 153)',
  },
  green: {
    primary: 'rgb(34, 197, 94)',
    primary_dark: 'rgb(20, 83, 45)',
    secondary: 'rgb(15, 23, 42)',
    accent: 'rgb(59, 130, 246)',
  },
  pink: {
    primary: 'rgb(236, 72, 153)',
    primary_dark: 'rgb(131, 24, 67)',
    secondary: 'rgb(30, 27, 51)',
    accent: 'rgb(59, 130, 246)',
  },
  orange: {
    primary: 'rgb(249, 115, 22)',
    primary_dark: 'rgb(124, 45, 18)',
    secondary: 'rgb(30, 20, 12)',
    accent: 'rgb(59, 130, 246)',
  },
};

export function useTheme() {
  const applyTheme = (color: string) => {
    const selectedTheme = themes[color as keyof typeof themes] || themes.red;
    const root = document.documentElement;
    
    root.style.setProperty('--color-primary', selectedTheme.primary);
    root.style.setProperty('--color-primary-dark', selectedTheme.primary_dark);
    root.style.setProperty('--color-secondary', selectedTheme.secondary);
    root.style.setProperty('--color-accent', selectedTheme.accent);
    
    themeColor.value = color;
    localStorage.setItem('theme-color', color);
  };

  watch(
    () => themeColor.value,
    (newColor) => {
      applyTheme(newColor);
    }
  );

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme-color') || 'red';
    applyTheme(savedTheme);
  });

  return {
    themeColor,
    applyTheme,
    themeOptions: Object.keys(themes),
    themes,
  };
}
