# erc721-with-tiers

NFTs have a lifetime value problem, some NFTs may decide to introduce a subscription model (as the contract in the example on ARB did) and value votes based on the tier you are in. 

Here is an example of parameters:

```json
{
  "name": "erc721-with-tiers",
  "params": {
    "address": "0xa4a6ad0546363d093a6eef1eabd31255a49b7635",
    "symbol": "WACT",
    "maxTiers": 3,
    "higherBetter": true
  }
}
```


`"higherBetter": true`: If `true` then tier 3 is stronger than tier 2. 
