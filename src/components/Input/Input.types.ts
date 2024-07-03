import { ChangeEvent } from "react";

export interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  hasError?: boolean;
  required?: boolean;
  error?: string;
}