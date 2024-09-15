import "./App.css";
import { Button, ConfigProvider } from "antd";
import PasswordDisplay from "./components/PasswordDisplay";
import CharacterLength from "./components/CharacterLength";
import Checkboxes from "./components/Checkboxes";
import StrengthMeter from "./components/StrengthMeter";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { checkPasswordStrength, generateRandomIndex, shuffle } from "./utils";

function App() {
  const [password, setPassword] = useState("");
  const [characterLength, setCharacterLength] = useState(6);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const generatePassword = () => {
    const TYPE_OF_CHARACTERS = {
      uppercaseLetters: {
        active: includeUppercase,
        data: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      },
      lowercaseLetters: {
        active: includeLowercase,
        data: "abcdefghijklmnopqrstuvwxyz",
      },
      numbers: {
        active: includeNumber,
        data: "0123456789",
      },
      symbols: {
        active: includeSymbol,
        data: "!@#$%^&*(),.?:{}|<>",
      },
    };

    let passwordSample = "";

    while (passwordSample.length < characterLength) {
      for (let i in TYPE_OF_CHARACTERS) {
        if (TYPE_OF_CHARACTERS[i].active) {
          let data = TYPE_OF_CHARACTERS[i].data;

          let randomIndex = generateRandomIndex(data);
          passwordSample += data[randomIndex];

          if (passwordSample.length == characterLength) {
            break;
          }
        }
      }
    }

    let passwordSampleArray = passwordSample.split("");
    let shufflePassword = shuffle(passwordSampleArray);

    shufflePassword = shufflePassword.join("");
    setPassword(shufflePassword);

    const strength = checkPasswordStrength(shufflePassword);
    setPasswordStrength(strength);
  };

  useEffect(() => {
    generatePassword();
  }, [
    characterLength,
    includeUppercase,
    includeLowercase,
    includeNumber,
    includeSymbol,
  ]);

  const toggleCheckboxValue = (name) => {
    if (name == "number") {
      setIncludeNumber((prev) => !prev);
    } else if (name == "symbol") {
      setIncludeSymbol((prev) => !prev);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a5ffaf",
        },
      }}
    >
      <section className="fira-sans-regular w-screen h-screen bg-slate-950 text-slate-200 flex justify-center items-center">
        <div className="max-w-sm flex-1 mx-5">
          <div className="">
            <div className="text-xl text-slate-600 font-bold text-center mb-5">
              Password Generator
            </div>
            <PasswordDisplay password={password} />
            <div className="bg-slate-800 mt-3 p-5">
              <CharacterLength
                characterLength={characterLength}
                setCharacterLength={setCharacterLength}
              />
              <Checkboxes
                includeNumber={includeNumber}
                includeSymbol={includeSymbol}
                toggleCheckboxValue={toggleCheckboxValue}
              />
              <StrengthMeter passwordStrength={passwordStrength} />
              <Button
                onClick={generatePassword}
                type="primary"
                className="uppercase text-slate-950 border-0 font-bold w-full p-5 mt-5"
              >
                Generate
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Toaster position="top-center" reverseOrder={false} />
    </ConfigProvider>
  );
}

export default App;
