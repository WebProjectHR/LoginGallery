import { useAuth } from "../context/authContext"
import './stylesHome.css'

export function Home() {
    const { logout, loading } = useAuth();

    const handleLogout = async () => {
        await logout()
    }

    if (loading) return <h1>Loading</h1>

    return (
        <div className="containerHome">
            <div className="head">
                <button className="btn2" onClick={handleLogout}>logout</button>
            </div>
            <div className="head">
                <h2>Bienvenido, en este apartado podrás subir fotos!</h2>
            </div>
            <div className="head2">
                <form className="form">
                    <span className="form-title">Subir archivos</span>
                    <p className="form-paragraph">
                        El archivo debe ser una imagen o video.
                    </p>
                    <label htmlFor="file-input" className="drop-container">
                        <span className="drop-title">Soltar archivo aquí</span>
                        o
                        <input type="file" accept="image/*" required="" id="file-input" />
                    </label>
                </form>
            </div>
        </div>
    )
}
