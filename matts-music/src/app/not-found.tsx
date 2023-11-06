import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <section>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <ErrorOutline fontSize="large" className="mb-3 text-red-600" />
                        <h1 className="text-5xl">
                            404
                        </h1>

                        <h2 className="text-3xl font-semibold text-center pt-12 leading-normal">
                            Cleverly done, Mr. Freeman, but you're not supposed to be here.
                        </h2>
                        <p>As a matter of fact, you're not. Get back to {" "}
                            <Link href="/" className="border-b border-zinc-700 hover:text-zinc-400">
                                where you belong
                            </Link>
                            , and forget about all of this, until we meet again.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}