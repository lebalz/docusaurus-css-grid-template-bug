import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const data = [
  {
    kw: 1,
    day: 'Mo',
    description: 'First day of the week',
  },
  {
    kw: 1,
    day: 'Tu',
    description: 'Second day of the week',
  },
  {
    kw: 1,
    day: 'We',
    description: 'Third day of the week',
  },
  {
    kw: 1,
    day: 'Th',
    description: 'Fourth day of the week',
  },
  {
    kw: 1,
    day: 'Fr',
    description: 'Fifth day of the week',
  },
  {
    kw: 1,
    day: 'Sa',
    description: 'First day of the weekend',
  },
  {
    kw: 1,
    day: 'Su',
    description: 'Last day of the weekend',
  },
];

const TableGrid = () => {
  return (
    <div className={clsx(styles.grid)}>
      {data.map((event, idx) => (
        <React.Fragment key={idx}>
          <div className={clsx(styles.cell, styles.kw)}>{event.kw}</div>
          <div className={clsx(styles.cell, styles.day)}>{event.day}</div>
          <div className={clsx(styles.cell, styles.description)}>
            {event.description}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TableGrid;
