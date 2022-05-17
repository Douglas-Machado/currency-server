import { SwapService } from "./SwapService";

const swapService = new SwapService

describe('Swap', () => {
  test('should be able to se the currency', async () => {
    await expect(swapService.execute({
      from: 'usd',
      to: 'brl',
      amount: 10
    })).resolves.not.toThrow()
  })
})