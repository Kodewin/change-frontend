export interface Watch {
  id: string;
  last_changed: number;
  last_checked: number;
  last_error: boolean;
  title: string | null;
  url: string;
  viewed: boolean;
}
