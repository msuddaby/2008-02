import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Link from "next/link";

export default function CancelPage() {
  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <ErrorOutline fontSize="large" className="mb-3 text-red-600" />
            <h1 className="text-5xl">Purchase Cancelled</h1>

            <div className="mb-3">
              <p className="text-center pt-12 leading-normal">
                Your purchase has been cancelled. And you have not been charged.
              </p>
            </div>
            <div>
              <Link href="/" className="underline">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
