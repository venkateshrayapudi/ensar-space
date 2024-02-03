import * as React from 'react'
import Moment from 'react-moment'

const Header = () => {
  return (
    <div>
       <header>
                <img src="https://www.ensarsolutions.com/images/ensar/logo.svg" alt="Ensar solutions" />
                <div>
            <Moment format="Do-MMM-YY hh:mm a" />
            </div>
            </header>
    </div>

  )
}

export default Header
