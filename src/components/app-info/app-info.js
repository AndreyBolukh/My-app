import './app-info.css'

const AppInfo = ({increase, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общие число сотрудников: {employees}</h2>
            <h2>Получат премию: {increase}</h2>
        </div>
    );
}


export default AppInfo;