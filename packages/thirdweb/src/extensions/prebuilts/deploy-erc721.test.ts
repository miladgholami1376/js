import { describe, expect, it } from "vitest";
import { ANVIL_CHAIN } from "../../../test/src/chains.js";
import { TEST_CLIENT } from "../../../test/src/test-clients.js";
import { TEST_ACCOUNT_A } from "../../../test/src/test-wallets.js";
import { deployERC721Contract } from "./deploy-erc721.js";
import { getContract } from "../../contract/contract.js";
import { name } from "../common/read/name.js";

// skip this test suite if there is no secret key available to test with
// TODO: remove reliance on secret key during unit tests entirely
describe.runIf(process.env.TW_SECRET_KEY)("deployERC721", () => {
  it("should deploy ERC721 drop", async () => {
    const address = await deployERC721Contract({
      client: TEST_CLIENT,
      chain: ANVIL_CHAIN,
      account: TEST_ACCOUNT_A,
      type: "DropERC721",
      params: {
        name: "NFTDrop",
      },
    });
    expect(address).toBe("0x6AA2E0148a57EcDdb025C856c4e68682CFfcac78");
    const deployedName = await name({
      contract: getContract({
        client: TEST_CLIENT,
        chain: ANVIL_CHAIN,
        address,
      }),
    });
    expect(deployedName).toBe("NFTDrop");
  });

  it("should deploy ERC721 token", async () => {
    const address = await deployERC721Contract({
      client: TEST_CLIENT,
      chain: ANVIL_CHAIN,
      account: TEST_ACCOUNT_A,
      type: "TokenERC721",
      params: {
        name: "NFTCollection",
      },
    });
    expect(address).toBe("0x349D9e8751C40Be121a862FaC1Dc7c357281846E");
    const deployedName = await name({
      contract: getContract({
        client: TEST_CLIENT,
        chain: ANVIL_CHAIN,
        address,
      }),
    });
    expect(deployedName).toBe("NFTCollection");
  });

  it("should deploy ERC721 open edition", async () => {
    const address = await deployERC721Contract({
      client: TEST_CLIENT,
      chain: ANVIL_CHAIN,
      account: TEST_ACCOUNT_A,
      type: "OpenEditionERC721",
      params: {
        name: "OE",
      },
    });
    expect(address).toBe("0x5804ebCE1834B8F57D31f0078B8f7Dd1F1Da4985");
    const deployedName = await name({
      contract: getContract({
        client: TEST_CLIENT,
        chain: ANVIL_CHAIN,
        address,
      }),
    });
    expect(deployedName).toBe("OE");
  });
});
