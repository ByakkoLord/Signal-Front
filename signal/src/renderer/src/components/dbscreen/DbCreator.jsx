import React, { useState, useContext } from 'react';
import { AppContext } from '../../../contexts/ClientContext';
import axios from 'axios';

export default function DbCreator() {
    const { setShowDbCreator } = useContext(AppContext);
    const [clientName, setClientName] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [fileInput, setFileInput] = useState(null);
    
    const createDb = async () => {
    const formData = new FormData();
    formData.append('db', fileInput.files[0]);
    formData.append('client', clientName)
    formData.append('service', serviceName)
    formData.append('db_date', new Date().toISOString())
    formData.append('db_size', fileInput.files[0].size)

    try {
      const response = await axios.post('http://localhost:3000/upload-db', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Database created:', response.data);
    } catch (error) {
      console.error('Error creating database:', error);
    }
  }

    return (
        <div className="DbCreator">
            <h2>Salvar Banco de Dados</h2>
            <input value={clientName} onChange={(e) => setClientName(e.target.value)} type="text" placeholder="Cliente"/>
            <input value={serviceName} onChange={(e) => setServiceName(e.target.value)} type="text" placeholder="Serviço"/>
             <input onChange={(e) => setFileInput(e.target)} type="file" name="db" id="db" />
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button type='button' onClick={() => setShowDbCreator(false)}>Voltar</button>
                <button type='button' onClick={() => [createDb() , setShowDbCreator(false)]}>Enviar</button>
            </div>
        </div>
    );
}