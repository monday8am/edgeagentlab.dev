import React from 'react';

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
      <a href={backLink.href} className="back-link">{backLink.label}</a>
      <h1>{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
