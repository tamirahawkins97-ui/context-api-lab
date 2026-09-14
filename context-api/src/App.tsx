import { ThemeProvider, useTheme } from './context/ThemeContext';
import { TodoProvider } from './context/TodoContext';
import { FilterProvider } from './context/FilterContext';
import { ThemeToggleButton } from './ThemeToggleButton';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { FilterButtons } from './FilterButtons';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`workspace ${theme}`}>
      <div className="system-grid-bg" />
      <main className="terminal-frame">
        <header className="terminal-header">
          <div className="system-identity">
            <span className="sys-code">WORKSPACE_01</span>
            <span className="sys-ver">v2.4.0</span>
          </div>
          <ThemeToggleButton />
        </header>

        <TodoInput />
        <TodoList />
        <FilterButtons />
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <AppContent />
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}
