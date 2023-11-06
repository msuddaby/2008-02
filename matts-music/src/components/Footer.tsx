import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center my-12">
        <div>
          <p className="text-center text-zinc-200">
            &copy; 2023 Matt&apos;s Albums
          </p>
          <div className="flex justify-center gap-2 text-white my-6">
            <a target="_blank" href="https://github.com/msuddaby/2008-02">
              <GitHubIcon className="w-[64px] h-[64px]" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
