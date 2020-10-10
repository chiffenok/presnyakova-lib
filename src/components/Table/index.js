import React from 'react'
import styles from './styles.css'

export const Table = ({ data, dataThead }) => {
  return (
    <table className={styles.tableComp}>
      {dataThead && (
        <thead>
          <tr>
            {dataThead.map((el) => (
              <th>{el.title}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.map((row, index) => {
          return (
            <tr>
              {Object.keys(row).map((key, indexInner) => (
                <td>
                  <div className={styles.tdTitle}>
                    {dataThead[indexInner].title}
                  </div>
                  {row[key]}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
