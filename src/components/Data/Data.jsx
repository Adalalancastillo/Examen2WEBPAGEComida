import React, { useEffect, useState } from "react";
import './Data.css';
import axios from 'axios';

function Restaurantes() {
    const [data, setData] = useState([]);
    const [valor, setValor] = useState('');

    const fetchData = () => {
        axios.get(`http://localhost:9000/api/lugar/${valor}`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error);
            });
    }

    useEffect(() => {

    }, [data]);

    const obtenerDatos = (event) => {
        setValor(event.target.value);
    };

    const mostrarDatos = () => {
        fetchData();
    };

    return (
        <div className="page">
            <img src={'https://media.tenor.com/pMYSaTk4wzUAAAAC/burger.gif'} alt="loading..." />
            <br/>
            <input type="text" value={valor} onChange={obtenerDatos} placeholder="Ingrese el lugar" />
            <button onClick={mostrarDatos}>Buscar</button>
            <h1>Lugares disponibles:</h1>
            <table className="center">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Lugar</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((datos) => (
                        <tr key={datos.id}>
                            <td>{datos.nombre}</td>
                            <td>{datos.lugar}</td>
                            <td><a href={datos.link}>Enlace</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Restaurantes;
