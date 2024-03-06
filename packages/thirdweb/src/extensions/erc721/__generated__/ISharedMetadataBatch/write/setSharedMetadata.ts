import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the parameters for the "setSharedMetadata" function.
 */
export type SetSharedMetadataParams = {
  metadata: AbiParameterToPrimitiveType<{
    type: "tuple";
    name: "metadata";
    components: [
      { type: "string"; name: "name" },
      { type: "string"; name: "description" },
      { type: "string"; name: "imageURI" },
      { type: "string"; name: "animationURI" },
    ];
  }>;
  id: AbiParameterToPrimitiveType<{ type: "bytes32"; name: "id" }>;
};

/**
 * Calls the "setSharedMetadata" function on the contract.
 * @param options - The options for the "setSharedMetadata" function.
 * @returns A prepared transaction object.
 * @extension ERC721
 * @example
 * ```
 * import { setSharedMetadata } from "thirdweb/extensions/erc721";
 *
 * const transaction = setSharedMetadata({
 *  metadata: ...,
 *  id: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setSharedMetadata(
  options: BaseTransactionOptions<SetSharedMetadataParams>,
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x696b0c1a",
      [
        {
          type: "tuple",
          name: "metadata",
          components: [
            {
              type: "string",
              name: "name",
            },
            {
              type: "string",
              name: "description",
            },
            {
              type: "string",
              name: "imageURI",
            },
            {
              type: "string",
              name: "animationURI",
            },
          ],
        },
        {
          type: "bytes32",
          name: "id",
        },
      ],
      [],
    ],
    params: [options.metadata, options.id],
  });
}