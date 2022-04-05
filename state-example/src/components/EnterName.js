import { useState } from 'react';

function EnterName() {
    const [name, setName] = useState('Ada');

    console.log(`EnterName: komponenten laddades om name: ${name}`);

    function getInputValue(event) {
        setName(event.target.value);
    }

    return (
        <section>
            <input type="text" placeholder="Skriv in ett namn"
                onKeyUp={ getInputValue } />
        </section>
    )
}

export default EnterName;