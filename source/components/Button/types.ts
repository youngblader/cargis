export interface ButtonProps {
  typeButton?: string;
  containerStyle?: {};
  buttonText: string;
  textSize?: number;
  onPress?: () => void;
}

export enum ButtonType {
  border = 'border',
  background = 'background',
}
