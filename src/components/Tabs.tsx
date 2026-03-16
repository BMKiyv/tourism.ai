'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
  tabMenuClassName?: string
  tabLinkClassName?: string
  tabContentClassName?: string
  tabPaneClassName?: string
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  className,
  tabMenuClassName,
  tabLinkClassName,
  tabContentClassName,
  tabPaneClassName,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && tabs.find(t => t.id === hash)) {
      setActiveTab(hash)
    }
  }, [tabs])

  return (
    <div className={cn('w-tabs', className)}>
      <div className={cn('w-tab-menu', tabMenuClassName)}>
        {tabs.map((tab) => (
          <a
            key={tab.id}
            className={cn(
              'w-inline-block w-tab-link',
              tabLinkClassName,
              activeTab === tab.id && 'w--current'
            )}
            onClick={() => setActiveTab(tab.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="sitizen-tab-text">{tab.label}</div>
          </a>
        ))}
      </div>
      <div className={cn('w-tab-content', tabContentClassName)}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              'w-tab-pane',
              tabPaneClassName,
              activeTab === tab.id && 'w--tab-active'
            )}
            style={{ 
              display: activeTab === tab.id ? 'block' : 'none',
              opacity: activeTab === tab.id ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
