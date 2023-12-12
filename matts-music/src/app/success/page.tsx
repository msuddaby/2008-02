import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <CheckCircleIcon
              fontSize="large"
              className="mb-3 text-emerald-600"
            />
            <h1 className="text-5xl">Success!</h1>

            <div className="mb-3">
              <p className="text-center pt-12 leading-normal">
                Thank you for your purchase! You will receive an email shortly
                with your shipping information.
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
