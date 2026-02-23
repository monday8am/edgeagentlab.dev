import React from 'react';
import ThemeToggle from './ThemeToggle';

interface BackLink {
  href: string;
  label: string;
}

interface PageHeaderProps {
  backLink: BackLink;
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ backLink, title, subtitle }) => {
  return (
    <div className="page-header">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <a href={backLink.href} className="back-link">{backLink.label}</a>
          <h1>{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default PageHeader;
