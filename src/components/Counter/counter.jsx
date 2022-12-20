import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../../features/counter/counterSlice'
import styles from './counter.module.css'

const Counter = () => {
    const { increment, decrement } = counterSlice.actions
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

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
                <input className={styles.input}></input>
                <button className={styles.box__button}>Добавить значение</button>
            </div>
        </div>
    )
}

export default Counter