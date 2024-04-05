import './styles.css'

export function Alert({ message }) {
    return (
        <div className="boxAlert">
            <span className='alerts'>{message}</span>
        </div>
    )
}
