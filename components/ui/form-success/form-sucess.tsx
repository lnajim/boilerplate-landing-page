import { CheckCircledIcon } from '@radix-ui/react-icons';

interface FormSucessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSucessProps) => {
  if (!message) return null;

  return (
    <div className="flex bg-emerald-500/15 p-3 rounded-md  items-center gap-x-2 text-sm  text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};