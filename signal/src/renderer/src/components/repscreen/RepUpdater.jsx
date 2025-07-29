import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../contexts/ClientContext';

export default function RepUpdater( {serialNumber} ) {
    const { socket } = useContext(AppContext);

const sendUpdate = (status) => {
    socket.emit('statusUpdate', { status, serialNumber })
    console.log('Status update sent:', { status, serialNumber });

        return () => {
            socket.off('statusUpdate');
        };
}


    return (
        <div style={{background: 'linear-gradient(to right, #3f2222, #19323e)', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px'}}>
            <h2>Atualização de REP</h2>
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                <button style={{flex: 1, backgroundColor: '#4CAF50', borderRadius: 10, border: 'none', cursor: 'pointer'}} onClick={() => [sendUpdate('checkMarkgreen')]} type="button">Finalizado</button>
                <button style={{flex: 1, backgroundColor: '#FFC107', borderRadius: 10, border: 'none', cursor: 'pointer'}} onClick={() => [sendUpdate('tool')]} type="button">Aguardando Manutenção</button>
                <button style={{flex: 1, backgroundColor: '#2196F3', borderRadius: 10, border: 'none', cursor: 'pointer'}} onClick={() => [sendUpdate('waitingDelivery2')]} type="button">Aguardando Fabricante</button>
                <button style={{flex: 1, backgroundColor: '#FF5722', borderRadius: 10, border: 'none', cursor: 'pointer'}} onClick={() => [sendUpdate('waitingDelivery')]} type="button">Aguardando Administração</button>
            </div>
        </div>
    )
}
