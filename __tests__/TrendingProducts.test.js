import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  usePathname: () => '/african-food-store/shop',
}))

import { AfricanFoodTrendingProducts } from '../components/african-food-store/TrendingProducts'

describe('AfricanFoodTrendingProducts route-gated filter', () => {
  test('shows tab filter on shop route when enabled', () => {
    render(<AfricanFoodTrendingProducts enableShopFilter />)
    expect(screen.getByRole('button', { name: /ALL/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /FRESH & DRY FOOD/i })).toBeInTheDocument()
  })

  test('hides tab filter on non-shop route even when enabled', () => {
    jest.doMock('next/navigation', () => ({ usePathname: () => '/african-food-store' }))
    const { AfricanFoodTrendingProducts: Comp } = require('../components/african-food-store/TrendingProducts')
    render(<Comp enableShopFilter />)
    expect(screen.queryByRole('button', { name: /ALL/i })).toBeNull()
  })

  test('hides tab filter when not enabled (default) on shop route', () => {
    render(<AfricanFoodTrendingProducts />)
    expect(screen.queryByRole('button', { name: /ALL/i })).toBeNull()
  })
})