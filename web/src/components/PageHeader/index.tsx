  
import React from 'react';

import './styles.css';

interface IPageHeaderProps {
  title: string;
  description?: string
}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  console.log(props);
  return (
    <header className="page-header">
      <div className="top-bar-container">
          <span>Contas e juros</span>
      </div>

      <div className="header-content">
        <strong>
          Lista de contas
        </strong>
      </div>
    </header>
  );
}

export default PageHeader;