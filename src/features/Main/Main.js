import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import styles from './Main.module.css'
import TaskDescription from './../TaskDescription/TaskDescription'
import TaskForm from "./../TaskForm/TaskForm";


function Main({changeDescription, ...props}) {
    const sections = [
        {title: 'Требуют уточнения', type: 'start', children: 'Требуют уточнения'},
        {
            title: 'Готовы к работе',
            type: 'Требуют уточнения',
            children: 'Готовы к работе'
        },
        {title: 'В работе', type: 'Готовы к работе', children: 'В работе'},
        {title: 'Выполнено', type: 'В работе', children: 'Выполнено'},
    ]

    return (
        <BrowserRouter>
            <main className={styles.main}>
                <Routes>
                    <Route
                        path="/"
                        element={sections.map((el, i) => (
                            <section key={i + 1} className={styles.section}>
                                <h2>{el.children}</h2>
                                <div className={styles.tasks}>
                                    {props.tasks.filter((task) => task.section === el.title).map((task) => (
                                        <Link to={task.id} className={styles.task}>
                                            <p>{task.text}</p>
                                        </Link>

                                    ))}
                                    <TaskForm tasks={props.tasks} title={el.title}
                                              type={el.type} {...props} />
                                </div>
                            </section>
                        ))}
                    />

                    <Route
                        path="/:id"
                        element={
                            <TaskDescription
                                tasks={props.tasks}
                                changeDescription={changeDescription}
                            />
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Link className={styles.notFound} to=".." relative="path">
                                Page Not Found. Click to back
                            </Link>
                        }
                    />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Main
