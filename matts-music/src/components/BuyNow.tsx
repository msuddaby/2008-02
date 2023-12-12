export default function BuyNow({ priceId }: { priceId: string }) {
  return (
    <>
      <form action="/api/checkout" method="POST">
        <input type="hidden" name="price" value={priceId} />
        <button className="rounded-2xl text-black bg-zinc-200 w-full py-4 text-xl font-bold transition-all duration-300 hover:bg-zinc-500 ease-in-out">
          Buy Now &middot; $50
        </button>
      </form>
    </>
  );
}
