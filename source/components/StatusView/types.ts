export interface StatusViewProps {
  status: string;
}

export interface StatusStyle {
  textColor: string;
  backgroundColor: string;
  text: string;
}

export enum Status {
  active = 'active',
  completed = 'completed',
  on_pause = 'on_pause',
}
