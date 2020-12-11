import React from "react"
const defaultState = {
  open: false,
  specialsOpen: false,
  toggleReservationTab: () => {},
  specialsReservationTab: () => {},
}
const ReservationContext = React.createContext(defaultState)

class ReservationProvider extends React.Component {
  state = {
    open: false,
    specialsOpen: false
  }
  toggleReservationTab = () => {
    let open = !this.state.open
    this.setState({ open })
  }
  specialsReservationTab = () => {
    console.log("HI HI")
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
          specialsOpen: this.state.specialsOpen,
          toggleReservationTab: this.toggleReservationTab,
          specialsReservationTab: this.specialsReservationTab,
        }}
      >
        {children}
      </ReservationContext.Provider>
    )
  }
}
export default ReservationContext
export { ReservationProvider }
