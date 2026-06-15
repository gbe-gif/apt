/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Tab } from './types';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './components/views/HomeView';
import { ApartmentView } from './components/views/ApartmentView';
import { ResidentsView } from './components/views/ResidentsView';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-[var(--color-paper)] font-sans selection:bg-[var(--color-sunset)] selection:text-white">
      <main className="w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomeView key="home" />}
          {activeTab === 'apartment' && <ApartmentView key="apartment" />}
          {activeTab === 'residents' && <ResidentsView key="residents" />}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
