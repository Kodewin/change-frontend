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
  time_between_check: {
    weeks: number | null;
    days: number | null;
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
  };
}

interface WatchContextProps {
  watchData: WatchData;
  updateWatchData: (key: keyof WatchData, value: any) => void;
  resetWatchData: () => void;
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
  time_between_check: {
    weeks: null,
    days: null,
    hours: 3, // default to 3 hours
    minutes: null,
    seconds: null,
  },
};

const WatchContext = createContext<WatchContextProps | undefined>(undefined);

export const WatchProvider: React.FC<WatchProviderProps> = ({ children }) => {
  const [watchData, setWatchData] = useState<WatchData>(defaultWatchData);

  const updateWatchData = (key: keyof WatchData, value: any) => {
    setWatchData((prev) => ({ ...prev, [key]: value }));
  };

  const resetWatchData = () => {
    setWatchData(defaultWatchData);
  };

  return <WatchContext.Provider value={{ watchData, updateWatchData, resetWatchData }}>{children}</WatchContext.Provider>;
};

export const useWatch = (): WatchContextProps => {
  const context = useContext(WatchContext);
  if (!context) {
    throw new Error('useWatch must be used within a WatchProvider');
  }
  return context;
};
