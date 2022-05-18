import { SwapService } from "./SwapService";

const swapService = new SwapService

describe('Swap', () => {
  test('should be able to convert the currency with an amount', async () => {
    await expect(swapService.execute({
      from: 'usd',
      to: 'brl',
      amount: 10
    })).resolves.not.toThrow()
  })

  test('should be able to convert the currency without amount', async () => {
    await expect(swapService.execute({
      from: 'usd',
      to: 'brl'
    })).resolves.not.toThrow()
  })

  test('should return an error when from currency is null or missing', async () => {
    await expect(swapService.execute({
      from: '',
      to: 'brl',
      amount: 10
    })).rejects.toThrow()
  })

  test('should return an error when to currency is null is missing', async () => {
    await expect(swapService.execute({
      from: 'usd',
      to: '',
      amount: 10
    })).rejects.toThrow()
  })
})