import { Spinner } from "./Spinner";

export function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      {/* <div className="m-auto border-gray-300 h-20 max-h-full aspect-square animate-spin rounded-full border-8 border-t-slate-900" /> */}
      <Spinner />
    </div>
  );
}
