'use client'

import { List, Root } from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('1')

  return (
    <Root value={currentTab} onValueChange={setCurrentTab}>
      <List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem value="1" title="My details" isSelected={currentTab === '1'} />
        <TabItem value="2" title="Profile" isSelected={currentTab === '2'} />
        <TabItem value="3" title="Password" isSelected={currentTab === '3'} />
        <TabItem value="4" title="Team" isSelected={currentTab === '4'} />
        <TabItem value="5" title="Plan" isSelected={currentTab === '5'} />
        <TabItem value="6" title="Billing" isSelected={currentTab === '6'} />
        <TabItem value="7" title="Email" isSelected={currentTab === '7'} />
        <TabItem
          value="8"
          title="Notifications"
          isSelected={currentTab === '8'}
        />
        <TabItem
          value="9"
          title="Integrations"
          isSelected={currentTab === '9'}
        />
        <TabItem value="10" title="API" isSelected={currentTab === '10'} />
      </List>
    </Root>
  )
}
