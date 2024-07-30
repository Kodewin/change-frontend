import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WatchData {
  monitorType: string;
  monitoringType: string;
  url: string;
  alertType: string;
  alertRange: number;
  frequency: string;
  watchName: string;
  tags: string;
  emailNotifications: boolean;
  maxEmails: number;
}

interface WatchContextProps {
  watchData: WatchData;
  updateWatchData: (key: keyof WatchData, value: any) => void;
}

interface WatchProviderProps {
  children: ReactNode;
}

const defaultWatchData: WatchData = {
  monitorType: 'single',
  monitoringType: 'content',
  url: '',
  alertType: 'percentage',
  alertRange: 0,
  frequency: 'monthly',
  watchName: '',
  tags: '',
  emailNotifications: false,
  maxEmails: 1,
};

const WatchContext = createContext<WatchContextProps | undefined>(undefined);

export const WatchProvider: React.FC<WatchProviderProps> = ({ children }) => {
  const [watchData, setWatchData] = useState<WatchData>(defaultWatchData);

  const updateWatchData = (key: keyof WatchData, value: any) => {
    setWatchData((prev) => ({ ...prev, [key]: value }));
  };


  return <WatchContext.Provider value={{ watchData, updateWatchData}}>{children}</WatchContext.Provider>;
};

export const useWatch = (): WatchContextProps => {
  const context = useContext(WatchContext);
  if (!context) {
    throw new Error('useWatch must be used within a WatchProvider');
  }
  return context;
};
