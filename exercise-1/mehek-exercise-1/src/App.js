import { useState } from 'react';
import './App.css';

function App() {
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfUploaded(true);
      setFileName(file.name);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload a PDF File</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          {/* File upload button */}
          <label htmlFor="file-upload" className="custom-button">
            Select PDF
          </label>
          <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          style={{display:'none'}}
          onChange={handleFileUpload}
          />
          {
            pdfUploaded && (
              <span style={{
                color: 'green',
                fontSize: '1.5em',
                fontWeight: 'bold'
              }}
              >
                ✔
              </span>
            )
          }
        </div>
        {pdfUploaded && <p>Uploaded file: {fileName}</p>}
      </header>
    </div>    
  );
}

export default App;
