import React from 'react'
import { DocumentLink } from './DocumentLink'

interface DocListItemProps {
  href: string
  label: string
  className?: string
  date?: string
}

export const DocListItem: React.FC<DocListItemProps> = ({ href, label, className, date }) => {
  return (
    <div className="o-tabpane-inf">
      <DocumentLink href={href} className={className}>
        {label}
      </DocumentLink>
      {date && <span className="anticor-date">{date}</span>}
    </div>
  )
}
