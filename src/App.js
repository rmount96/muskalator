import './App.css';
import NameForm from './components/NameForm';
import React, {useState} from 'react';
import TranslatedName from './components/TranslatedName';

function App() {
  const [newName, setNewName] = useState("");
  const translatedArray = [];
  let i = 0;
  const onSubmit = (person) => {
    console.log("================")
    // console.log(person)
    // console.log(person.name)
    const splicedName = person.name.split("")
    console.log(splicedName)
    splicedName.forEach(e => {
      console.log(e);
      if (e === "a" || e === "A") {
        // Elon's favorite aircraft
        translatedArray[i] = " SR-71 ";
        i ++;
        console.log(translatedArray);
      } 
      if (e === "b" || e === "B") {
        translatedArray[i] = "B";
        // Elon's first company
        i ++;
        console.log(translatedArray);
      }
      if (e === "c" || e === "C") {
        translatedArray[i] = " A-3 "
        i++
        console.log(translatedArray)
      }
      if (e === "d" || e === "D") {
        // Greek delta
        translatedArray[i] = "Δ"
        i++
        console.log(translatedArray)
      }
      if (e === "e") {
        translatedArray[i] = "Ⲉ"
        i++
        console.log(translatedArray)
      }
      if (e === "E") {
        // Seemingly Elon's favorite letter
        translatedArray[i] = "X"
        i++
      }
      if (e === "f" || e === "F") {
        translatedArray[i] = "Φ"
        i++
        console.log(translatedArray)
      }
      if (e === "g" || e === "G") {
        translatedArray[i] = "ʒ"
        i++
        console.log(translatedArray)
      }
      if (e === "h" || e === "H") {
        translatedArray[i] = "8"
        i++
        console.log(translatedArray)
      }
      if (e === "i" || e === "I") {
        translatedArray[i] = "-Zip2 "
        i++
        console.log(translatedArray)
      }
      if (e === "j" || e === "J") {
        translatedArray[i] = " A-10 "
        i++
        console.log(translatedArray)
      }
      if (e === "k" || e === "K") {
        // Greek letter pronounced "chi"
        translatedArray[i] = "X"
        i++
        console.log(translatedArray)
      }
      if (e === "l" || e === "L") {
        // 12th letter in the English alphabet
        translatedArray[i] = " A-12 "
        i++
        console.log(translatedArray)
      }
      if (e === "m" || e === "M") {
        // First letter of Elon's last name, last letter of the alphabet
        translatedArray[i] = " AZ-26 "
        i++
        console.log(translatedArray)
      }
      if (e === "n" || e === "N") {
        // Greek lowercase for N is v
        translatedArray[i] = "V"
        i++
        console.log(translatedArray)
      }
      if (e === "o" || e === "O") {
        // Symbol of Grimes' song "Omega"
        translatedArray[i] = " ≈Ω≈ "
        i++
        console.log(translatedArray)
      }
      if (e === "p" || e === "P") {
        // Greek Pi
        translatedArray[i] = "Π"
        i++
        console.log(translatedArray)
      }
      if (e === "q" || e === "Q") {
        // Elon's estimated IQ
        translatedArray[i] = "155"
        i++
        console.log(translatedArray)
      }
      if (e === "r" || e === "R") {
        // Greek
        translatedArray[i] = "Ρ"
        i++
        console.log(translatedArray)
      }
      if (e === "s" || e === "S") {
        // Sigma
        translatedArray[i] = " Σ σ/ς "
        i++
        console.log(translatedArray)
      }
      if (e === "t" || e === "T") {
        // Grimes record label she signed to in 2010
        translatedArray[i] = "4AD"
        i++
        console.log(translatedArray)
      }
      if (e === "u" || e === "U") {
        // No logic here
        translatedArray[i] = "B"
        i++
        console.log(translatedArray)
      }
      if (e === "v" || e === "V") {
        translatedArray[i] = "β"
        i++
        console.log(translatedArray)
      }
      if (e === "w" || e === "W") {
        // Old English 'wynn'
        translatedArray[i] = "Ƿ"
        i++
        console.log(translatedArray)
      }
      if (e === "x" || e === "X") {
        // Greek
        translatedArray[i] = "Ξ"
        i++
        console.log(translatedArray)
      }
      if (e === "y" || e === "Y") {
        // Old English
        translatedArray[i] = "Æ"
        i++
        console.log(translatedArray)
      }
      if (e === "z" || e === "Z") {
        // Greek
        translatedArray[i] = "ζ"
        i++
        console.log(translatedArray)
      }
    const muskName = translatedArray.join("")
    setNewName(muskName + " Musk" )
    })
  }

  return (
    <>
    <div className="container">
      <NameForm className="header"
        title = "Find out what Elon Musk would've named you!"
        onSubmit = {onSubmit}
      /> 
      </div>
      <div>
      {newName &&
      <TranslatedName className="musk-name"
        name = {newName}
      />
       }
    </div>
    </>
  );
}

export default App;
