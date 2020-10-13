import { Table } from '.'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('TableComponent', () => {
  const dataTable = [
    {
      tier: 0,
      winners: 0,
      prize: 0
    },
    {
      tier: 1,
      winners: 0,
      prize: 3232
    }
  ]

  const headerData = [
    {
      title: 'Tier'
    },
    {
      title: 'Match'
    },
    {
      title: 'Winner'
    }
  ]

  it('is truthy', () => {
    expect(Table).toBeTruthy()
  })

  it('render correct amount of cells', () => {
    const table = shallow(<Table data={dataTable} dataThead={headerData} />)
    expect(table.find('td').length).toBe(6)
    expect(table.find('th').length).toBe(3)
  })
})
