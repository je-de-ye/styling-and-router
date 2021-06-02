import {Link} from 'react-router-dom'

const style = {
    fullScreen: {
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        position: 'absolute',
        backgroundColor: 'darkBlue',
        color: 'white'
    }
}

function NotFound() {
    return (
        <div style={style.fullScreen} className="d-flex justify-content-center align-items-center">
            Page Not Found &nbsp; | &nbsp; <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound
