import { useState, useEffect } from 'react';
import axios from 'axios';

function ServerStatus() {
  const [status, setStatus] = useState('offline');

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkServerStatus();
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3080/status');
      setStatus(response.data.status);
    } catch (error) {
      setStatus('offline')
    }
  }

  return (
    <div>
      <h2>Back-End Server Status:</h2>
      <br />
      <h3>
        {status === 'online' ? (
          <span style={{ color: 'green' }}>Online</span>
        ) : (
          <span style={{ color: 'red' }}>Offline</span>
        )}
      </h3>
    </div >
  );
}

export default ServerStatus