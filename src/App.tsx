import './App.css'
import { Cities } from './data/Cities' // Импортируем наш "конфиг" городов
import Clock from './components/Clock' // Импортируем наш "девайс"

function App() {
    return (
        <div className="app-container">
            <h1>World Clock Manager</h1>

            <div className="clocks-grid">
                {/* Запускаем цикл (map), который для каждого города из массива
                    создаст отдельный экземпляр компонента Clock */}
                {Cities.map((item) => (
                    <Clock key={item.name} city={item} />
                ))}
            </div>
        </div>
    )
}

export default App
