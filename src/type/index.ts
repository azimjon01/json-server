export interface CarPost {
  id?: number;
  marka?: string;
  year?: string;
  color?: string;
  shina?: string;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
