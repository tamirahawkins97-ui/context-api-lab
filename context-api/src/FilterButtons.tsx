import { useFilter } from './context/FilterContext';
import { useTodos, type Todo } from './context/TodoContext';

export const FilterButtons = () => {
  const { filter, setFilter } = useFilter();
  const { todos, clearCompleted } = useTodos();

  const completedCount = todos.filter((t: Todo) => t.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="status-dock">
      <div className="counter-badge">
        <span className="metric-val">{activeCount}</span>
        <span className="metric-label">PENDING</span>
      </div>

      <div className="filters-segmented">
        {(['all', 'active', 'completed'] as const).map((f) => (
          <button
            key={f}
            className={`filter-tab ${filter === f ? 'selected' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {completedCount > 0 ? (
        <button className="purge-btn" onClick={clearCompleted}>
          PURGE [{completedCount}]
        </button>
      ) : (
        <div className="purge-placeholder" />
      )}
    </div>
  );
};
