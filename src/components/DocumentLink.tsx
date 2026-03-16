import React from 'react'
import { cn } from '@/lib/utils'

interface DocumentLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
}

export const DocumentLink: React.FC<DocumentLinkProps> = ({ 
  href, 
  children, 
  className, 
  target = "_blank" 
}) => {
  const isExternal = href.startsWith('http') || href.endsWith('.pdf') || href.endsWith('.doc') || href.endsWith('.docx')

  return (
    <a 
      href={href} 
      target={isExternal ? target : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn('laws-list-item', className)}
    >
      {children}
    </a>
  )
}
