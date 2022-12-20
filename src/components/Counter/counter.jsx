import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementAmount, incrementAsync } from '../../features/counter/counterSlice'
import styles from './counter.module.css'

const Counter = () => {
    const counter = useSelector(state => state.counter.value);
    const status = useSelector(state => state.counter.status);
    const dispatch = useDispatch();
    const [value, setValue] = useState(2);

    return (
        <div>
            <h1 className={styles.title}>Простой счетчик</h1>
            <div className={styles.container}>
                <p
                    className={styles.sub}
                    onClick={() => dispatch(decrement())}
                >
                    -
                </p>
                <p className={styles.counter}>
                    {counter}
                </p>
                <p
                    className={styles.plus}
                    onClick={() => dispatch(increment())}
                >
                    +
                </p>
            </div>
            <div className={styles.box}>
                <input
                    className={styles.input}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                </input>
                <button
                    className={styles.box__button}
                    onClick={() => dispatch(incrementAmount(Number(value)))}
                >
                    Добавить значение
                </button>
                <button
                    className={styles.box__button}
                    onClick={() => dispatch(incrementAsync(Number(value)))}
                >
                    {status === 'loading'
                        ? 'Загрузка...'
                        : 'Асинхрон'
                    }
                </button>
            </div>
        </div>
    )
}

export default Counter