import type { City } from '../models/City';
import { useEffect, useState } from "react";

// 1. Описываем "входной порт" для данных (Props)
interface Props {
    city: City;
}

// 2. Оборачиваем всё в функцию-компонент
function Clock({ city }: Props) {
    // 3. Создаём локальный реестр времени для этих конкретных часов
    const [time, setTime] = useState(new Date());

    // 4. Твой движок (useEffect), теперь внутри компонента
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="clock-card">
            {/* 5. Берем имя из настроек конкретного города */}
            <h3>{city.name}</h3>

            {/* 6. МАГИЯ: форматируем время под часовой пояс этого города */}
            <p>
                {time.toLocaleTimeString('en-GB', { timeZone: city.timezone })}
            </p>
        </div>
    );
}

// 7. Делаем прибор доступным для импорта в App.tsx
export default Clock;
