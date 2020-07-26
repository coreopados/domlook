import React, { useState } from "react";
import Dropzone from "react-dropzone";

export default function DropZ() {
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles =>
        setFileNames(acceptedFiles.map(file => file.name));

    return (
        <div className="drop-wrap">
            <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p> <i className="fas fa-cloud-upload-alt"></i> Перетащите сюда изображения или</p>

                        <p className="orangeButton">Выбирите изображение</p>
                    </div>
                )}
            </Dropzone>
            <div className="descripton-drop">
                <strong>Files:</strong>
                <ul>
                    {fileNames.map(fileName => (
                        <li key={fileName}>{fileName}</li>
                    ))}
                </ul>
            </div>
            <p>* Изображение должно иметь минимальную ширину 770 пикселей и минимальную высоту 386 пикселей.</p>
            <p>* Вы можете пометить изображение как показано, щелкнув значок звездочки, иначе первое изображение будет считаться по умолчанию выбранным изображением.</p>
        </div >
    );
}