import { strategy as erc721WithMultiplier } from '../erc721-with-multiplier';
import { multicall } from '../../utils';
import { formatUnits } from '@ethersproject/units';

export const author = 'Wavect GmbH (wavect.io)';
export const version = '0.1.0';


const abi = [
  'function balanceOf(address account) external view returns (uint256)'
];

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options,
  snapshot
) {
  const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';
  const response = await multicall(
    network,
    provider,
    abi,
    addresses.map((address: any) => [options.address, 'balanceOf', [address]]),
    { blockTag }
  );
  return Object.fromEntries(
    response.map((value, i) => [
      addresses[i],
      parseFloat(formatUnits(value.toString(), 0))
    ])
  );
}
