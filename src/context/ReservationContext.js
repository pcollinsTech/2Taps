import React from "react"
const defaultState = {
  open: false,
  specialsOpen: false,
  contactOpen: false,
  toggleReservationTab: () => {},
  specialsReservationTab: () => {},
  contactTab: () => {},
}
const ReservationContext = React.createContext(defaultState)

class ReservationProvider extends React.Component {
  state = {
    open: false,
    specialsOpen: false,
    contactOpen: false
  }
  toggleReservationTab = () => {
    let open = !this.state.open
    this.setState({ open })
  }
  contactTab = () => {
    let contactOpen = !this.state.contactOpen
    this.setState({ contactOpen })
  }
  specialsReservationTab = () => {
    let specialsOpen = !this.state.specialsOpen
    this.setState({ specialsOpen })
  }
  componentDidMount() {
    // Getting open mode value from localStorage!
  }
  render() {
    const { children } = this.props
    const { open } = this.state
    return (
      <ReservationContext.Provider
        value={{
          open: this.state.open,
          contactOpen: this.state.contactOpen,
          specialsOpen: this.state.specialsOpen,
          toggleReservationTab: this.toggleReservationTab,
          specialsReservationTab: this.specialsReservationTab,
          contactTab: this.contactTab,
        }}
      >
        {children}
      </ReservationContext.Provider>
    )
  }
}
export default ReservationContext
export { ReservationProvider }
