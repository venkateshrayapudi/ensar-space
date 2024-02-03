import Button from "./Button";

const Test = () => {
    return (
        <>
            <h1>Test</h1>
            <Button label="Venky" appearance="primary" />
            <Button label="Cancel" appearance="secondary" />
            <Button label="Ok" appearance="error" textColor="black" />
            <Button label="Test" appearance="outline" textColor="black" />
        </>
    )
}

export default Test;
