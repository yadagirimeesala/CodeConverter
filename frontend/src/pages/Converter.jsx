import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { convertCode } from '../api/codeConverter';


const languages=["Python","Java","JavaScript","C","C++"]

function extractCode(text){
    const match=text.match(/```(?:\w+)?\s*([\s\S]*?)```/);
    return match?match[1].trim():text.trim();
}

function Converter() {
    const [sourceLang, setSourceLang] = useState("Python");
    const [targetLang, setTargetLang] = useState("Java");
    const [sourceCode, setSourceCode] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleConvert = async () => {
        setLoading(true);
        setOutput("");
        try {
            const result = await convertCode({
                source_code: sourceCode, source_lang: sourceLang, target_lang: targetLang
            });
            setOutput(extractCode(result));
        } catch (err) {
            setOutput("Error: " + (err.response?.data?.error || err.message));
        }
        setLoading(false);
    };


    return (
        <div style={{maxWidth:800,margin:"auto",padding:20}}>
            <h2>Code Converter</h2>
            <div style={{ marginBottom:10 }}>
                <select value={sourceLang} onChange={e => setSourceLang(e.target.value)}>
                    {
                        languages.map(l => (
                            <option key={l}>{l}</option>
                        ))
                    }
                </select>
                <span style={{ margin: '0 10px' }}>→</span>
                <select value={targetLang} onChange={e => setTargetLang(e.target.value)}>
                    {languages.map(l => (
                        <option key={l}>{l}</option>
                    ))}
                </select>
            </div>
            <CodeMirror value={sourceCode} height='150px' onChange={val => setSourceCode(val)}
                placeholder="Enter your code here..." />
            <button onClick={handleConvert} disabled={loading} style={{ margin: "10px 0" }}>{loading ? "Converting..." : "Convert"}</button>
            <h3>Output</h3>
            <CodeMirror value={output} height='200px' readOnly />
        </div>
    );
}

export default Converter;