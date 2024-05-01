interface Props {
  width: number;
}

export const ProgressBar = ({ width }: Props) => {
  return (
    <div className="h-2.5 w-full rounded-full bg-mediumGrey">
      <div
        className={`h-2.5 rounded-full bg-empowerBlue`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};
