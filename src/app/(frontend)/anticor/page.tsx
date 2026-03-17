import React from 'react'
import { Tabs } from '@/components/Tabs'
import { ActivityTab } from './components/ActivityTab'
import { CleaningTab } from './components/CleaningTab'
import { GuideTab } from './components/GuideTab'
import { AnnouncementsTab } from './components/AnnouncementsTab'

export default function AnticorPage() {
  const tabs = [
    {
      id: 'Tab 1',
      label: 'Антикорупційна діяльність',
      content: <ActivityTab />,
    },
    {
      id: 'Tab 2',
      label: 'Очищення влади',
      content: <CleaningTab />,
    },
    {
      id: 'Tab 3',
      label: 'Гайд для викривачів корупції',
      content: <GuideTab />,
    },
    {
      id: 'Tab 4',
      label: 'Оголошення',
      content: <AnnouncementsTab />,
    },
  ]

  return (
    <div className="w-layout-blockcontainer o-container sitizens header-trigger w-container">
      
      <h1 className="sitizen-first-header">Антикорупційна діяльність та очищення влади</h1>
      
      <Tabs 
        tabs={tabs} 
        className="sitizen-tab-wrap"
        tabMenuClassName="tabs-menu-2"
        tabLinkClassName="sitizen-tab"
      />
    </div>
  )
}
