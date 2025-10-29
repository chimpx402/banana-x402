export default function handler(req, res) {
  res.status(402).json({
    x402Version: 1,
    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "1000000", // 1 USDC (6 decimals)
        resource: "https://banana-x402.vercel.app/api/mint",
        description: "Mint 5,000 BANANA for 1 USDC on Base.",
        mimeType: "application/json",

        // ✅ EIP-55 checksummed
        payTo: "0xC7a41a4c6ed9a7abc0457938126668bf366e44ed",       // your treasury
        asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",       // USDC (Base)

        maxTimeoutSeconds: 60,
        extra: {
          name: "BANANA Mint",
          symbol: "BANANA",
          contract: "0x8Eb543a84DC0e4b7885898d844a55276661F5Fa5",   // your token
          outPerMint: "5000"
        }
      }
    ],
    // optional but helps some consumers
    payer: "0xC7a41a4c6ed9a7abc0457938126668bf366e44ed"
  });
}
