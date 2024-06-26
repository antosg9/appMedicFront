export interface Analyse {
  _id: {
    code_cip: string;
    year?: string;
    week?: string;
    month?: string;
    day?: string;
  };
  count: number;
}
