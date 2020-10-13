import React, { Component } from 'react'
import styles from './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside() {
    this.setState({
      dropdownOpen: false
    })
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  selectItem(title, id, stateKey) {
    const { onSelecting } = this.props

    this.setState(
      {
        headerTitle: title,
        dropdownOpen: false
      },
      onSelecting(id, stateKey)
    )
  }

  dropdownItems() {
    const { list } = this.props
    return list.map((item) => (
      <li
        className={styles.dropdownItem}
        key={item.id}
        onClick={() => this.selectItem(item.title, item.id, item.key)}
      >
        {item.selected ? <b>{item.title}</b> : item.title}
      </li>
    ))
  }

  render() {
    const { dropdownOpen, headerTitle } = this.state
    return (
      <div className={styles.dropdownWrapper}>
        <div
          className={styles.dropdownHeader}
          onClick={() => this.toggleDropdown()}
        >
          <div className={styles.dropdownTitle}>
            {headerTitle}
            {dropdownOpen ? (
              <FontAwesomeIcon icon={faAngleUp} size='2x' />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} size='2x' />
            )}
          </div>
        </div>
        {dropdownOpen && (
          <ul className={styles.dropdownList}>{this.dropdownItems()}</ul>
        )}
      </div>
    )
  }
}

export default Dropdown
