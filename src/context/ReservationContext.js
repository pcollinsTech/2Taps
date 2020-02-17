import React from "react"
const defaultState = {
  open: false,
  toggleReservationTab: () => {},
}
const ReservationContext = React.createContext(defaultState)

class ReservationProvider extends React.Component {
  state = {
    open: false,
  }
  toggleReservationTab = () => {
    let open = !this.state.open
    console.log("TOGGLES")
    this.setState({ open })
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
          open,
          toggleReservationTab: this.toggleReservationTab,
        }}
      >
        {children}
      </ReservationContext.Provider>
    )
  }
}
export default ReservationContext
export { ReservationProvider }
