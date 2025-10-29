// api/mint.js
export default async function handler(req, res) {
  res.status(402).json({
    x402Version: 1,
    payer: "0xc7a41a4c6ed9a7abc0457938126668bf366e44ed", // same as payTo/treasury

    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "1000000", // 1 USDC (6 decimals)
        resource: "https://banana-x402.vercel.app/api/mint",
        description: "Mint 5,000 BANANA for 1 USDC on Base.",
        mimeType: "application/json",
        payTo: "0xc7a41a4c6ed9a7abc0457938126668bf366e44ed",
        asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bD4a02913", // USDC on Base
        maxTimeoutSeconds: 60,

        // Schema that x402scan uses to render a UI
        outputSchema: {
          input: {
            type: "http",
            method: "POST",
            bodyType: "json",

            // Optional but recommended so their UI shows inputs
            bodyFields: {
              qty: {
                type: "integer",
                required: true,
                description: "How many mints to request (e.g., 1)."
              }
            },

            // Optional: this isn't part of their formal schema,
            // but leaving it here does not break anything and
            // some UIs use it to list resources.
            discoverable: true
          },

          // Must be an object per their validator
          output: {}
        },

        // Any extra metadata you want to show
        extra: {
          name: "BANANA Mint",
          symbol: "BANANA",
          contract: "0x8Eb543a84DC0e4b7885898d844a55276661F5Fa5",
          outPerMint: "5000"
        }
      }
    ]
  });
}
