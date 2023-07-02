import styles from './Footer.module.css'
import Count from "./../../common/components/Count/Count";



function Footer({ clear, ...props }) {
  return (                                                   //счётчик сумма????
    <footer className={styles.footer} onDoubleClick={clear}>  
      <div className={styles.counts}>   
        <Count title="Требуют уточнения" {...props}>  
          Требуют уточнения 
        </Count>
        <Count title="Готовы к работе" {...props}>
          Готовы к работе
        </Count>
        <Count title="В работе" {...props}>
          В работе
        </Count>
        <Count title="Выполнено" {...props}>
          Выполненные задачи
        </Count>
      </div>   
      <p>{'Канбан-доска по <ИМЕНИ>, <ГОДУ>'}</p>
    </footer>
  )
}

export default Footer