import { useState, useEffect } from "react";
import Papa from "papaparse";
import Download from "./components/Download";
import styled from "@emotion/styled";
import { formatNumber } from "./utils/formatNumber";
import InformationTable from "./components/Informationtable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [contacts, setContacts] = useState([]);
  const [loandingContacts, setLoandingContacts] = useState(false);
  const [uploadedContactStatus, setUploadedContactStatus] = useState([])
  const [currentUploadContacts, setCurrentUploadContacts] = useState([])
  const [isUpload, setIsUpload] = useState(false)

  function uploadFile(event) {
    const file = event.target.files[0];
    console.log(file);
    Papa.parse(file, {
      header: false,
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results);
        setContacts(results.data);
      },
    }); // Analiza el CSV
    console.log(contacts, "*********");
  }
  async function handleDownload() {
    setIsUpload(false)
    const response = await fetch(
      "https://8j5baasof2.execute-api.us-west-2.amazonaws.com/production/tests/trucode/items"
    );
    const result = await response.json();
    setCurrentUploadContacts(result.items)

  }
  async function handleUploadFile() {
    setLoandingContacts(true);
    setUploadedContactStatus([])
    setIsUpload(true)

    for (let contact of contacts) {
  
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contact[0],
          email: contact[2],
          phone: formatNumber(contact[1]),
        }),
      };
      try {
        const response = await fetch(
          "https://8j5baasof2.execute-api.us-west-2.amazonaws.com/production/tests/trucode/items",
          requestOptions
        );

        const result = await response.json();
        const newUploadedContact = {name:contact[0], email:contact[2], phone:contact[1]}

        newUploadedContact["status"] = result.message == undefined? "contact not uploaded" : "uploaded contact" 
       

        setUploadedContactStatus(oldArray => [...oldArray, newUploadedContact]);
      } catch (error) {
        console.error(error);
      }
    }
    setLoandingContacts(false);
  }
console.log(uploadedContactStatus)
  return (
    <>
      <h1>Welcome to Contact saver</h1>
      <Wrapper>
        <Download />
        <div>
          <input type="file" onChange={uploadFile} />
          {loandingContacts && <>Loanding...</>}
          <button onClick={handleUploadFile}>Upload file</button>
        </div>
        {!!uploadedContactStatus.length &&  <InformationTable contactsStatus={uploadedContactStatus} isUpload={isUpload}/>}
        <button onClick={handleDownload}>Download contacts</button>
        {!!currentUploadContacts.length &&  <InformationTable contactsStatus={currentUploadContacts} isUpload={isUpload}/>}
      </Wrapper>
    </>
  );
}

export default App;
