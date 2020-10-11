import React, { Component } from 'react'

import { Table, Dropdown } from 'presnyakova-lib'

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: [
        {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location'
        },
        {
          id: 1,
          title: 'Dublin',
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'California',
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Istanbul',
          selected: false,
          key: 'location'
        }
      ]
    }
  }

  /*const handleOnChange = () => {
    console.log('change')
    <Dropdown onChange={handleOnChange}/>
  }*/

  setSelectedItem = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    const dataTable = [
      {
        tier: 0,
        winners: 0,
        specialPrize: 0,
        prize: 0
      },
      {
        tier: 1,
        winners: 0,
        specialPrize: 0,
        prize: 3232
      },
      {
        tier: 2,
        winners: 0,
        specialPrize: 0,
        prize: 3233132
      },
      {
        tier: 3,
        winners: 0,
        specialPrize: 0,
        prize: 3234332
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
      },
      {
        title: 'Amount'
      }
    ]
    console.log(this.state.location)

    return (
      <div style={{ margin: '1em' }}>
        <Table data={dataTable} dataThead={headerData} />
        <Dropdown
          title='Select location'
          list={this.state.location}
          onSelecting={this.setSelectedItem}
        />
      </div>
    )
  }
}

export default App
