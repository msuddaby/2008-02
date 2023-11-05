type Props = {
  header: string;
  body: string;
};

export default function InfoBox({ header, body }: Props) {
  return (
    <div className="bg-zinc-900 rounded-xl p-3 w-full">
      <h2 className="text-2xl font-extralight border-b border-zinc-500 mb-3">
        {header}
      </h2>
      <p>{body}</p>
    </div>
  );
}
