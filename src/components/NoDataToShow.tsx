interface NoDataToShowProps {
  message?: string;
}

export function NoDataToShow({ message = "No data to show" }: NoDataToShowProps) {
  return (
    <div className="flex justify-center items-center">
      <p className="text-white text-2xl font-bold" role="alert">
        {message}
      </p>
    </div>
  );
}
