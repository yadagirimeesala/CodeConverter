import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { VscSync } from 'react-icons/vsc';
import { convertCode } from '../api/codeConverter'; 

// Extracts code from markdown-style code blocks
function extractCode(text) {
  const match = text.match(/```(?:\w+)?\s*([\s\S]*?)```/);
  return match ? match[1].trim() : text.trim();
}


function Converter() {
  // --- State Management ---
  const [sourceLang, setSourceLang] = useState("Python");
  const [targetLang, setTargetLang] = useState("JavaScript");
  const [sourceCode, setSourceCode] = useState("def greet(name):\n  print(f\"Hello, {name}!\")\n\ngreet(\"World\")");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // copy button
  const [sourceCopied, setSourceCopied] = useState(false);
  const [outputCopied, setOutputCopied] = useState(false);


  const languages = ["Python", "JavaScript", "Java", "C++", "Go", "Ruby", "TypeScript"];


  const handleConvert = async () => {
    if (!sourceCode.trim()) {
      setError("Source code cannot be empty.");
      return;
    }
    setLoading(true);
    setError(null);
    setOutput("");

    try {
      const result = await convertCode({
        source_code: sourceCode,
        source_lang: sourceLang,
        target_lang: targetLang,
      });
      setOutput(extractCode(result));
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message || "An unknown error occurred.";
      setError(errorMessage);
      setOutput(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceCode(output);
    setOutput(sourceCode);
  };
  
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    const setCopied = type === 'source' ? setSourceCopied : setOutputCopied;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // it will reset after 2 seconds
  };
  

  return (
    <div className="converter-container">
      <div className="editor-wrapper">
        {/* Source Code Editor */}
        <div className="editor-card">
          <div className="editor-header">
            <span>{sourceLang}</span>
            <button onClick={() => handleCopy(sourceCode, 'source')} className="copy-btn" title="Copy source code">
              {sourceCopied ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
          <CodeMirror
            value={sourceCode}
            height="50vh"
            theme={okaidia}
            onChange={(val) => setSourceCode(val)}
            placeholder={`Enter ${sourceLang} code...`}
            className="cm-editor-instance"
          />
        </div>

        {/* --- Conversion Controls --- */}
        <div className="controls-center">
          <div className="language-selector">
            <label>From</label>
            <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
              {languages.map(l => <option key={`src-${l}`} value={l}>{l}</option>)}
            </select>
          </div>
          
          <button onClick={handleSwapLanguages} className="swap-btn" title="Swap Languages">
            <VscSync />
          </button>

          <div className="language-selector">
            <label>To</label>
            <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
              {languages.map(l => <option key={`tgt-${l}`} value={l}>{l}</option>)}
            </select>
          </div>

          <button onClick={handleConvert} disabled={loading} className="convert-btn">
            {loading ? "Converting..." : "Convert"}
          </button>
          
          {error && <div className="error-message">{error}</div>}
        </div>

        {/* Output Code Editor */}
        <div className="editor-card">
          <div className="editor-header">
            <span>{targetLang}</span>
            <button onClick={() => handleCopy(output, 'output')} className="copy-btn" title="Copy output code">
              {outputCopied ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
          <CodeMirror
            value={output}
            height="50vh"
            theme={okaidia}
            readOnly
            placeholder="Converted code will appear here..."
            className="cm-editor-instance"
          />
        </div>
      </div>
    </div>
  );
}

export default Converter;