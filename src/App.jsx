import { useState } from "react";
import "./App.css";

import Dropdown from "./components/Dropdown";
import TextArea from "./components/TextArea";
import Counter from "./components/Counter";

import { detectEncoding, countGsmCharacters } from "./utils/gsmUtils";
import { calculateSmsParts } from "./utils/smsUtils";
import { extractValidNumbers } from "./utils/mobileUtils";

const senderOptions = ["TXTSMS", "INFOSM", "PROMOS"];

const templates = {
  TPL001: "This is a test message",
  TPL002: "Hello user, your OTP is 1234",
};

export default function App() {
  const [sender, setSender] = useState(senderOptions[0]);
  const [templateId, setTemplateId] = useState("TPL001");
  const [mobiles, setMobiles] = useState("");
  const [message, setMessage] = useState(templates["TPL001"]);

  // --- Derived values (NO extra state, this is correct) ---
  const encoding = detectEncoding(message);

  const characters =
    encoding === "GSM"
      ? countGsmCharacters(message)
      : message.length;

  const parts = calculateSmsParts(characters, encoding);

  const validNumbers = extractValidNumbers(mobiles);
  const totalSms = parts * validNumbers.length;


  return (
    <div className="container">
      <h2>SMS Web Platform</h2>

      <Dropdown
        label="Sender ID"
        value={sender}
        options={senderOptions}
        onChange={setSender}
      />

      <Dropdown
        label="Template ID"
        value={templateId}
        options={Object.keys(templates)}
        onChange={(id) => {
          setTemplateId(id);
          setMessage(templates[id]);
        }}
      />

      <TextArea
        label="Mobile Numbers"
        placeholder="Enter comma or space separated 10-digit numbers"
        value={mobiles}
        onChange={setMobiles}
      />

      <TextArea
        label="Message"
        value={message}
        onChange={setMessage}
      />

      <div className={encoding === "UNICODE" ? "unicode" : ""}>
      <Counter
      encoding={encoding}
      characters={characters}
      parts={parts}
      totalSms={totalSms}
      />
</div>

      <button
  disabled={validNumbers.length === 0}
  onClick={() => {
    alert(`Sending ${totalSms} SMS`);
  }}
>
  Send
</button>

    </div>
  );
}
