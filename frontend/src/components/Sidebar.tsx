// src/components/Sidebar.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <a href="/">
            <Image src="/images/clubhub.png" alt="Logo" width={150} height={100} />
          </a>
        </li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/alarms">Alarms</a></li>
        <li><a href="/expenses">Expenses</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
