import { createContext, ReactNode, useContext, useState } from 'react';

interface WatchData {
  monitorType: string;
  monitoringType: string;
  urls: string;
  alertType: string;
  alertRange: number;
  frequency: string;
  watchName: string;
  tags: string;
  emailNotifications: boolean;
  maxEmails: number;
}

interface WatchContextType {
  watchData: WatchData;
  updateWatchData: (key: keyof WatchData, value: string | number | boolean) => void;
}

const WatchContext = createContext<WatchContextType | undefined>(undefined);

export const useWatch = (): WatchContextType => {
  const context = useContext(WatchContext);
  if (!context) {
    throw new Error('useWatch must be used within a WatchProvider');
  }
  return context;
};

export const WatchProvider = ({ children }: { children: ReactNode }) => {
  const [watchData, setWatchData] = useState<WatchData>({
    monitorType: '',
    monitoringType: '',
    urls: '',
    alertType: '',
    alertRange: 0,
    frequency: '',
    watchName: '',
    tags: '',
    emailNotifications: false,
    maxEmails: 1,
  });

  const updateWatchData = (key: keyof WatchData, value: string | number | boolean) => {
    setWatchData((prev) => ({ ...prev, [key]: value }));
  };

  return <WatchContext.Provider value={{ watchData, updateWatchData }}>{children}</WatchContext.Provider>;
};
