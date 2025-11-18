import React from 'react'
import { render, screen } from '@testing-library/react'

import { AfricanFoodSupportSection } from '../components/african-food-store/SupportSection'

describe('AfricanFoodSupportSection', () => {
  test('renders title, subtitle and contact info', () => {
    render(<AfricanFoodSupportSection />)
    expect(screen.getByRole('heading', { name: /REVAMP SUPPORT\./i })).toBeInTheDocument()
    expect(screen.getByText(/24\/7 Assistance/)).toBeInTheDocument()
    expect(screen.getByText(/support@revamp.com/)).toBeInTheDocument()
    expect(screen.getByText(/Available 24\/7/)).toBeInTheDocument()
  })

  test('renders office cards and actions', () => {
    render(<AfricanFoodSupportSection />)
    expect(screen.getByRole('heading', { name: /New York City, USA/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Get Direction/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /Call Now/i }).length).toBeGreaterThan(0)
  })
})